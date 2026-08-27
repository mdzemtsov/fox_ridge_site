import { motion } from "framer-motion";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">服务条款</h1>
          <p className="text-stone-500 mb-2">生效日期：2026年5月28日</p>
          <p className="text-stone-500 mb-12">最后更新：2026年5月28日</p>

          <div className="prose prose-stone max-w-none space-y-2">

            <p className="text-stone-600 leading-relaxed">
              本服务条款（“条款”）约束您对由 <strong>FoxRidge Equity Partners</strong> 运营的网站 <strong>foxridgeequity.com</strong>（“网站”）的访问与使用。FoxRidge Equity Partners 为 <strong>Consulting Point LLC</strong> 的贸易名称（DBA），Consulting Point LLC 为佛罗里达州有限责任公司（以下称“公司”、“我们”或“我们的”）。访问或使用本网站，即表示您同意受本条款约束。如您不同意本条款，请勿使用本网站。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">1. 仅供信息之用；不构成投资建议</h2>
            <p className="text-stone-600 leading-relaxed">
              本网站提供的内容仅用于信息和教育目的。网站上的任何内容均不构成投资、法律、税务、会计或其他专业建议，也不应作为作出任何投资或其他决策的依据。在作出任何投资决定之前，您应寻求相关且具体的专业建议。公司并非注册投资顾问、经纪自营商（broker-dealer）或理财规划师。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">2. 不构成要约或招揽</h2>
            <p className="text-stone-600 leading-relaxed">
              本网站的任何内容均不得被解释为出售任何证券、投资产品或服务的要约，或作为购买要约的招揽。任何此类要约或招揽仅会通过保密私募备忘录和相关发售文件进行，并且仅向适用法律允许的辖区内的合格投资者（accredited investors）提供。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">3. 预测性陈述</h2>
            <p className="text-stone-600 leading-relaxed">
              本网站的某些信息可能包含预测性陈述，受已知和未知的风险、不确定性及其他因素影响，可能导致实际结果与所述或暗示的结果存在重大差异。预测性陈述仅在其发表之日有效。公司无义务就任何预测性陈述进行公开更新或修订，无论是基于新信息、未来事件或其他原因。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">4. 过往业绩</h2>
            <p className="text-stone-600 leading-relaxed">
              过往业绩并不代表未来结果。并未作出任何陈述表明任何投资将会或可能实现与过去相似的收益或损失。网站上展示的所有回报数据、IRR（内部收益率）预测、股权倍数及其他财务指标均为示例性并基于可能不实现的假设。房地产投资涉及重大风险，包括可能损失全部投资本金。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">5. 知识产权</h2>
            <p className="text-stone-600 leading-relaxed">
              本网站及其全部内容、功能与特性——包括但不限于所有信息、软件、文本、显示内容、图像、视频、音频、市场研究报告、投资分析，以及其设计、选择与排列——均由公司、其许可方或其他材料提供方所有，并受美国及国际版权、商标、专利、商业秘密及其他知识产权法律保护。
            </p>
            <p className="text-stone-600 leading-relaxed">
              未经公司事先书面同意，您不得复制、分发、修改、创作衍生作品、公开展示、公开表演、重新发布、下载、存储或传输本网站上的任何材料，但依本条款的规定，仅可为您个人的非商业用途而使用。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">6. 禁止用途</h2>
            <p className="text-stone-600">您同意不得以以下方式使用本网站：</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li>以任何违反适用联邦、州、地方法律或国际法律法规的方式使用本网站。</li>
              <li>传播任何未经请求或未获授权的广告或促销材料。</li>
              <li>冒充或试图冒充公司、公司的员工或任何其他个人或实体。</li>
              <li>从事任何限制或妨碍他人使用或享受本网站的行为。</li>
              <li>试图未经授权访问本网站的任何部分或与之连接的任何其他系统或网络。</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">7. 免责声明</h2>
            <p className="text-stone-600 leading-relaxed">
              本网站及所有内容均在“按现状”（AS IS）及“按可用情况”（AS AVAILABLE）的基础上提供，不作任何明示或暗示的保证。公司特此否认包括但不限于对适销性、特定用途适用性和非侵权的暗示保证。公司不保证本网站将不间断、无错误，或不含病毒或其他有害成分。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">8. 责任限定</h2>
            <p className="text-stone-600 leading-relaxed">
              在适用法律允许的最大范围内，公司、其关联公司、许可方、服务提供商、雇员、代理人、高管或董事对于因您使用或无法使用本网站或任何内容而引起的任何间接、附带、特殊、后果性或惩罚性损害（包括但不限于利润、数据、商誉或其他无形损失）概不负责，即便公司已被告知该等损害的可能性。
            </p>
            <p className="text-stone-600 leading-relaxed">
              在任何情况下，公司就因本条款或您使用本网站而对您承担的所有索赔的累计责任均不超过一百美元（$100.00）。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">9. 赔偿</h2>
            <p className="text-stone-600 leading-relaxed">
              您同意为公司及其关联公司、许可方、服务提供商、雇员、代理人、高管和董事就因您违反本条款或使用本网站而引起或与之相关的任何索赔、责任、损害、判决、赔偿、损失、费用或开支（包括合理的律师费）进行辩护、赔偿并使其免受损害。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">10. 第三方链接</h2>
            <p className="text-stone-600 leading-relaxed">
              本网站可能包含指向第三方网站的链接。此类链接仅为便利而提供。公司无法控制这些网站的内容，对其不承担责任，也不对您因使用这些网站而可能产生的任何损失或损害承担责任。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">11. 适用法律</h2>
            <p className="text-stone-600 leading-relaxed">
              本条款以及因其引起或与其相关的任何争议或主张（包括非合同争议或主张）应受<strong>佛罗里达州</strong>法律管辖并按其解释，且不考虑任何法律选择或法律冲突规定或规则的影响。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">12. 争议解决</h2>
            <p className="text-stone-600 leading-relaxed">
              <strong>非正式解决：</strong>在提起任何正式法律诉讼之前，您同意首先通过电子邮件联系：<a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a>，并尝试以非正式方式解决争议。我们将在收到您通知后30天内尽力解决争议。
            </p>
            <p className="text-stone-600 leading-relaxed mt-4">
              <strong>具有约束力的仲裁：</strong>如果争议无法通过非正式方式解决，您与公司同意，任何因本条款或本网站引起或与之相关的争议、索赔或争议应由美国仲裁协会（AAA）根据其商业仲裁规则进行具有约束力的仲裁，而非诉诸法院。仲裁应在<strong>佛罗里达州迈阿密-戴德县</strong>进行。仲裁员的裁决为终局且具有约束力，可作为有管辖权法院的判决予以登记。
            </p>
            <p className="text-stone-600 leading-relaxed mt-4">
              <strong>放弃集体诉讼：</strong>您同意任何仲裁或程序应仅限于您与公司之间的个人争议。在法律允许的最大范围内，您放弃参与集体诉讼或集体仲裁的权利。
            </p>
            <p className="text-stone-600 leading-relaxed mt-4">
              <strong>例外情况：</strong>本节内容不妨碍任何一方在有管辖权的法院寻求禁令或其他衡平救济以防止在仲裁结果出炉前发生不可弥补的损害。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">13. 管辖与审判地</h2>
            <p className="text-stone-600 leading-relaxed">
              对于不适用仲裁的事项，您同意<strong>佛罗里达州迈阿密-戴德县</strong>的州级和联邦法院对相关争议具有专属管辖权，并放弃对在该等法院设定审判地的任何异议。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">14. 条款变更</h2>
            <p className="text-stone-600 leading-relaxed">
              我们保留在任何时间更新或修改本条款的权利。我们将在本页面发布任何变更并更新“最后更新”日期。您在任何变更后继续使用本网站，即表示您接受修订后的条款。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">15. 可分割性与放弃</h2>
            <p className="text-stone-600 leading-relaxed">
              若本条款的任何条款被认定为无效、非法或不可执行，其余条款仍将继续完全有效。公司未能执行本条款的任何权利或规定不得视为对该权利或规定的放弃。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">16. 完整协议</h2>
            <p className="text-stone-600 leading-relaxed">
              本条款与我们的隐私政策共同构成您与公司就您使用本网站达成的完整协议，并取代所有先前及同时期的协议、陈述和谅解。
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">17. 联系信息</h2>
            <p className="text-stone-600 leading-relaxed">
              如您对本条款有任何疑问，请与我们联系：
            </p>
            <div className="bg-stone-100 border border-stone-200 p-6 mt-4 text-stone-700 text-sm space-y-1">
              <p><strong>FoxRidge Equity Partners</strong>（Consulting Point LLC 的 DBA）</p>
              <p>电子邮件：<a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a></p>
              <p>组织成立州：佛罗里达州，美国</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row gap-4 items-start">
            <Link href="/zh" className="text-secondary font-semibold hover:underline text-sm">← 返回首页</Link>
            <Link href="/zh/privacy-policy" className="text-secondary font-semibold hover:underline text-sm">隐私政策 →</Link>
            <Link href="/zh/contact" className="text-secondary font-semibold hover:underline text-sm">联系我们 →</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
