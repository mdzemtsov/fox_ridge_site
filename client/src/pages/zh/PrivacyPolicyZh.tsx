import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="container max-w-4xl">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">隐私政策</h1>
          <p className="text-stone-500 mb-2">生效日期：2026年5月28日</p>
          <p className="text-stone-500 mb-12">最后更新：2026年8月26日</p>

          <div className="prose prose-stone max-w-none space-y-2">

            <p className="text-stone-600 leading-relaxed">
              FoxRidge Equity Partners，为佛罗里达州有限责任公司 <strong>Consulting Point LLC</strong> 的商业名称（DBA，下称“我们”“我们的”或“本公司”），尊重您的隐私并致力于通过遵守本政策来保护您的隐私。本隐私政策描述了当您访问 <strong>foxridgeequity.com</strong>（下称“网站”）时，我们可能从您处收集或您可能提供的信息类型，以及我们收集、使用、维护、保护和披露该等信息的做法。
            </p>
            <p className="text-stone-600 leading-relaxed">
              通过访问或使用我们的网站，您即表示同意本隐私政策。如果您不同意，请停止使用本网站。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">1. 我们收集的信息</h2>
            <p className="text-stone-600">我们通过以下方式收集信息：</p>
            <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">a. 您直接提供的信息</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>保密引介表单：</strong>姓名、电子邮件地址、投资者类型、国家或地区、美国人士身份状态、指示性出资能力、当前意向、偏好时区、可选留言内容，以及您提交的必要的隐私/联系同意确认。</li>
              <li><strong>详细材料请求：</strong>如果您在请求详细材料时申请保密引介，我们将使用相同的首次引介信息来审查该请求。该表单并非投资者资格验证。</li>
            </ul>
            <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">b. 自动收集的信息</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>日志数据：</strong>IP 地址、浏览器类型和版本、操作系统、引用来源 URL、访问的页面以及访问的时间/日期。</li>
              <li><strong>设备信息：</strong>硬件型号、操作系统版本和唯一设备标识符。</li>
            </ul>
            <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">c. Cookie 及类似技术</h3>
            <p className="text-stone-600 leading-relaxed">
              我们的网站使用以下类型的 Cookie 和浏览器存储：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>主题偏好：</strong>我们仅使用浏览器的 localStorage 来记住您选择的显示主题。当前的公共站点不会使用浏览器存储进行投资者资格验证、自动潜在客户弹窗或投资者门户的访问。</li>
              <li><strong>分析 Cookie：</strong>我们目前不使用第三方分析服务（例如 Google Analytics）。如果将来添加分析服务，本政策将会更新并显示 Cookie 同意横幅。</li>
              <li><strong>无广告 Cookie：</strong>我们不使用任何形式的广告、重定向或跟踪 Cookie。</li>
            </ul>
            <p className="text-stone-600">
              您可以通过浏览器设置控制 Cookie 和浏览器存储。禁用存储可能会影响所选站点偏好或会话行为。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">2. 我们如何使用您的信息</h2>
            <p className="text-stone-600">我们使用所收集的信息用于：</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li>回应您的咨询并就潜在的投资合作与您沟通。</li>
              <li>将提交的保密引介询问路由至 FoxRidge 指定的运营收件箱以供单独审查，并向表单中提交的电子邮件地址发送自动确认收讫邮件。</li>
              <li>向您展示我们的网站及其内容。</li>
              <li>遵守适用的法律和监管义务。</li>
              <li>改进并维护我们的网站。</li>
              <li>保护我们的网站和业务运营的安全与完整性。</li>
            </ul>
            <p className="text-stone-600">
              我们不会将您的个人信息用于自动化决策或画像分析。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">3. 数据保留</h2>
            <p className="text-stone-600 leading-relaxed">
              我们仅在为实现收集目的所必需的期限内或适用法律要求的期限内保留个人信息：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>保密引介提交：</strong>通过 Vercel 托管的端点路由，写入私有 Vercel Blob 存储，并通过 Resend 将提交的询问作为运营通知发送至 <strong>partners@foxridgeequity.com</strong>，并向表单中提交的电子邮件地址发送自动确认收讫邮件。经审阅的应用源代码未实现自动删除；这些记录的保留安排须根据 FoxRidge 的内部政策和适用法律要求进行管理。</li>
              <li><strong>托管与安全日志：</strong>可能由相应的托管提供商根据其服务配置为安全和运营目的保留。</li>
              <li><strong>浏览器存储数据</strong>（主题偏好）：存储在您本地的浏览器中，直到您清除浏览器存储或更改偏好。</li>
            </ul>
            <p className="text-stone-600">
              FoxRidge 用于保密引介记录的内部保留与删除流程应适用于该私有记录存储；经审阅的网站源代码本身并未自动执行删除或匿名化。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">4. 您的信息披露</h2>
            <p className="text-stone-600 leading-relaxed">
              我们不会为第三方的营销目的出售、交易、出租或以其他方式转让您的个人信息。我们可能在以下有限情况下披露个人信息：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>表单路由、私有存储与邮件通知：</strong>保密引介的实现使用 Vercel 托管的表单路由、私有 Vercel Blob 存储以及 Resend，将提交的询问作为运营通知发送至 <strong>partners@foxridgeequity.com</strong>，并向表单中提交的电子邮件地址发送自动确认收讫邮件。经审阅的网站源代码中未配置任何 CRM。任何额外的服务提供商将按需评估并在本政策中反映。</li>
              <li><strong>法律合规：</strong>为遵守任何适用法律、法规、法院命令或政府请求。</li>
              <li><strong>业务转让：</strong>在合并、收购或全部或部分资产出售的情形下，且提供适当的保密保护。</li>
              <li><strong>权利保护：</strong>为执行我们的服务条款或保护 FoxRidge Equity Partners / Consulting Point LLC、我们的用户或他人的权利、财产或安全。</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">5. 数据安全</h2>
            <p className="text-stone-600 leading-relaxed">
              我们实施合理的管理、技术和物理保障措施，以保护您的个人信息免遭未经授权的访问、使用、披露、更改或销毁。我们的网站通过 HTTPS 提供服务并使用 TLS 加密。然而，互联网上的传输方法或电子存储方法均无法达到 100% 的安全性。我们无法保证您信息的绝对安全。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">6. 您的权利 — 加州居民（CCPA）</h2>
            <p className="text-stone-600 leading-relaxed">
              如果您是加州居民，加州消费者隐私法案（CCPA）和加州隐私权法案（CPRA）为您就个人信息提供特定权利：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>知情权：</strong>您有权要求我们披露我们已收集的关于您的个人信息、信息来源的类别、收集目的以及我们与之共享的第三方类别。</li>
              <li><strong>删除权：</strong>您有权在某些例外情形下请求删除我们所收集的个人信息。</li>
              <li><strong>更正权：</strong>您有权请求更正不准确的个人信息。</li>
              <li><strong>选择退出出售或共享的权利：</strong> <strong>我们不会为进行跨情境行为广告之目的向第三方出售或共享您的个人信息。</strong>目前没有可供选择退出的事项。</li>
              <li><strong>不歧视权：</strong>您行使任何 CCPA 权利时，我们不会对您进行歧视。</li>
            </ul>
            <p className="text-stone-600">
              如需行使上述任何权利，请通过{" "}
              <a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a> 与我们联系。
              我们将在 45 天内对可验证的消费者请求作出回应。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">7. 您的权利 — 其他司法辖区</h2>
            <p className="text-stone-600 leading-relaxed">
              如果您在美国以外提交保密引介询问，您的信息可能会通过并存储在网站所使用的托管、私有存储和运营邮件通知服务中，包括 Vercel 和 Resend。经审阅的应用源代码未实现访客选择存储位置或单独的区域处理工作流。根据您所在的国家或州，您可能在适用的数据保护法下享有额外权利。要就您的信息提出请求，请使用下方联系方式与我们联系。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">8. 儿童隐私</h2>
            <p className="text-stone-600 leading-relaxed">
              本网站不针对 18 岁以下的个人。我们不会有意收集 18 岁以下儿童的个人信息。如果您认为我们可能无意中收集了此类信息，请立即与我们联系，我们将采取措施将其删除。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">9. 第三方链接</h2>
            <p className="text-stone-600 leading-relaxed">
              我们的网站可能包含指向第三方网站的链接。我们不对那些网站的隐私实践或内容负责。我们建议您查看任何访问的第三方网站的隐私政策。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">10. 本隐私政策的变更</h2>
            <p className="text-stone-600 leading-relaxed">
              我们可能会不时更新本隐私政策。我们将在此页面上公布任何变更并更新“最后更新”日期。您在任何变更后继续使用本网站即表示您接受修订后的政策。我们建议您定期查看本政策。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">11. 联系信息</h2>
            <p className="text-stone-600 leading-relaxed">
              如果您对本隐私政策或我们的数据处理有任何问题、疑虑或请求，请与我们联系：
            </p>
            <div className="bg-stone-100 border border-stone-200 p-6 mt-4 text-stone-700 text-sm space-y-1">
              <p><strong>FoxRidge Equity Partners</strong>（Consulting Point LLC 的 DBA）</p>
              <p>电子邮件: <a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a></p>
              <p>注册地：美国佛罗里达州</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row gap-4 items-start">
            <Link href="/zh" className="text-secondary font-semibold hover:underline text-sm">← 返回首页</Link>
            <Link href="/zh/terms-of-service" className="text-secondary font-semibold hover:underline text-sm">服务条款 →</Link>
            <Link href="/zh/contact" className="text-secondary font-semibold hover:underline text-sm">联系我们 →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
