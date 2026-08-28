import { Check, Globe2 } from "lucide-react";
import { useLocation } from "wouter";
import {
  LOCALES,
  LOCALE_ORDER,
  SiteLocale,
  toEquivalentLocalizedPath,
} from "@/lib/locale";
import { LANGUAGE_SELECTOR_COPY, getLanguageSelectorLabel } from "@/lib/locale-content";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type LanguageSelectorProps = {
  currentPath: string;
  locale: SiteLocale;
  compact?: boolean;
};

/**
 * Direct URLs are authoritative. The component only changes locale after an explicit selection
 * and preserves the active non-Research route plus query/hash whenever local content is available.
 */
export default function LanguageSelector({ currentPath, locale, compact = false }: LanguageSelectorProps) {
  const [, setLocation] = useLocation();
  const copy = LANGUAGE_SELECTOR_COPY[locale];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={compact
            ? "inline-flex h-11 items-center gap-1.5 rounded-sm px-2 text-[11px] font-bold text-primary transition-colors hover:bg-primary/5 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            : "inline-flex h-10 items-center gap-2 rounded-sm border border-primary/15 px-2.5 text-[11px] font-bold text-primary transition-colors hover:border-secondary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"}
          aria-label={getLanguageSelectorLabel(locale)}
        >
          <Globe2 className="h-4 w-4" aria-hidden="true" />
          <span>{compact ? LOCALES[locale].nativeName : LOCALES[locale].selectorLabel}</span>
          <span className="sr-only">{copy.current}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-56 border-primary/15 bg-white p-1.5 text-primary">
        <div dir={LOCALES[locale].direction}>
          <DropdownMenuLabel className="px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">{copy.label}</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-primary/10" />
          <DropdownMenuRadioGroup value={locale} onValueChange={(next) => {
            const nextLocale = next as SiteLocale;
            if (LOCALES[nextLocale].selectable) setLocation(toEquivalentLocalizedPath(currentPath, nextLocale));
          }}>
            {LOCALE_ORDER.map((item) => {
              const definition = LOCALES[item];
              const isCurrent = item === locale;
              return (
                <DropdownMenuRadioItem
                  key={item}
                  value={item}
                  disabled={!definition.selectable && !isCurrent}
                  className="min-h-10 cursor-pointer gap-3 rounded-sm px-2.5 py-2 text-sm font-medium text-primary focus:bg-primary/[0.06] focus:text-primary data-[disabled]:cursor-not-allowed data-[disabled]:opacity-55"
                >
                  <span className="min-w-0 flex-1 text-start">{definition.nativeName}</span>
                  {isCurrent ? <Check className="h-4 w-4 shrink-0 text-secondary" aria-label={copy.current} /> : null}
                  {!definition.selectable && !isCurrent ? <span className="text-[10px] font-semibold text-stone-500">{copy.unavailable}</span> : null}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
