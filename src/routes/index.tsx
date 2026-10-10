import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowLeft, BookOpen, Check, Clock3, GraduationCap, Mail, Menu, ShieldCheck, Sparkles, Target, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import studyImage from '@/assets/academy-study.jpg';
import { contactEmail, groupProgram, individualPackages, subscriptionLink } from '@/lib/academy';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'أكاديمية علو الهمة | برامج التعليم والاشتراك' },
    { name: 'description', content: 'تعرّف على برامج أكاديمية علو الهمة: حصص فردية للأطفال وحلقات جماعية للنساء، والباقات الشهرية وطرق الاشتراك.' },
    { property: 'og:title', content: 'أكاديمية علو الهمة | تعلّم يناسبك' },
    { property: 'og:description', content: 'برامج فردية للأطفال وحلقات جماعية للنساء. اختر برنامجك وتواصل معنا لبدء رحلتك التعليمية.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Brand() {
  return <a className="brand" href="#home" aria-label="أكاديمية علو الهمة — الرئيسية"><span className="brand-icon"><BookOpen size={25} strokeWidth={1.4} /></span><span><span className="brand-name">علو الهمة</span><span className="brand-caption">أكاديمية للتعلّم والارتقاء</span></span></a>;
}
const navItems = [{ href: '#programs', label: 'برامجنا' }, { href: '#packages', label: 'باقات الاشتراك' }, { href: '#subscribe', label: 'كيف تشترك؟' }];
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div dir="rtl" id="home">
    <header className="site-header"><div className="site-container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="القائمة الرئيسية">{navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <Button asChild className="action header-cta"><a href="#contact">تواصل معنا <ArrowLeft /></a></Button>
      <Button className="mobile-menu" variant="ghost" size="icon" aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
    </div></header>
    {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="قائمة الهاتف">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</a></nav>}
    <main>
      <section className="hero" aria-labelledby="main-title">
        <img className="hero-image" src={studyImage} alt="مساحة هادئة للتعلّم تضم كتبًا وحاسوبًا بجوار نافذة مضيئة" width={1536} height={1024} fetchPriority="high" />
        <div className="site-container"><div className="hero-copy reveal">
          <div className="eyebrow">رحلة تعلّم تبدأ بهمّة</div>
          <h1 id="main-title">أكاديمية علو الهمة</h1>
          <p className="hero-tagline">علمٌ ينفع، وهمّةٌ ترتقي.</p>
          <p className="hero-description">تعلّم قائم على الفهم والتصحيح، في برامج تناسب مستواك وهدفك. حصص فردية للأطفال، وحلقات جماعية للنساء.</p>
          <div className="hero-actions"><Button asChild className="action"><a href="#programs">اكتشف برامجنا <ArrowLeft /></a></Button><Button asChild variant="outline" className="action"><a href="#packages">باقات الاشتراك</a></Button></div>
          <div className="hero-note"><ShieldCheck size={16} /> متابعة مستمرة، وخطوات واضحة نحو التقدّم</div>
        </div></div>
      </section>
      <div className="trust-band"><div className="site-container trust-grid">
        <div className="trust-item"><Target /><div><strong>تعلّم حسب مستواك</strong><span>تقييم يحدّد نقطة البداية</span></div></div>
        <div className="trust-item"><BookOpen /><div><strong>فهم وتطبيق</strong><span>منهج قائم على التصحيح</span></div></div>
        <div className="trust-item"><GraduationCap /><div><strong>تقدّم تراه</strong><span>متابعة وتقييمات منتظمة</span></div></div>
      </div></div>
      <section className="section" id="programs"><div className="site-container">
        <div className="section-heading"><p className="section-label">برامجنا التعليمية</p><h2>لكل متعلّم، مسار يناسبه</h2><p className="section-intro">اختر أسلوب التعلّم الأنسب لك أو لطفلك، واترك لنا متابعة الرحلة.</p></div>
        <div className="program-grid">
          <article className="program-card"><div className="program-top"><span className="program-icon"><GraduationCap /></span><span className="program-tag">من 5 إلى 18 سنة</span></div><h3>الحصص الفردية للأطفال</h3><p>مساحة تعلّم خاصة بطفلك، وفق مستواه وهدفه، مع اهتمام بالفهم وتصحيح الأخطاء خطوة بخطوة.</p><ul><li><Check /> اهتمام فردي</li><li><Check /> تقارير شهرية</li><li><Check /> اختبارات انتقال</li></ul><Button asChild variant="link" className="program-link"><a href="#packages">اكتشف الباقات الفردية <ArrowLeft /></a></Button></article>
          <article className="program-card"><div className="program-top"><span className="program-icon"><Users /></span><span className="program-tag">للنساء والطالبات</span></div><h3>الحلقات الجماعية للنساء</h3><p>تعلّم بصحبة من يشاركنك الهدف، في مجموعات متقاربة المستوى، مع متابعة الحضور والواجبات وتقييم نهاية الدورة.</p><ul><li><Check /> {groupProgram.students} طالبات للمجموعة</li><li><Check /> {groupProgram.meetings} لقاءات شهريًا</li><li><Check /> {groupProgram.hours} ساعة شهريًا</li></ul><Button asChild variant="link" className="program-link"><a href={subscriptionLink('الحلقات الجماعية للنساء')}>استفسري عن الانضمام <ArrowLeft /></a></Button></article>
        </div>
      </div></section>
      <section className="section pricing-section" id="packages"><div className="site-container">
        <div className="section-heading centered"><p className="section-label">باقات الاشتراك</p><h2>خطوة اليوم، تصنع تقدّم الغد</h2><p className="section-intro">ثلاث باقات شهرية للحصص الفردية. اختر ما يناسب وقت طفلك وهدفه.</p></div>
        <div className="pricing-grid">{individualPackages.map(plan => <article key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
          {plan.featured && <span className="featured-label">لرحلة أكثر انتظامًا</span>}
          <h3>{plan.name}</h3><p className="price-subtitle">{plan.description}</p><div className="price"><span className="price-number" dir="ltr">${plan.price}</span><span className="price-unit">دولار أمريكي / شهريًا</span></div>
          <ul><li><BookOpen /> {plan.sessions} حصص شهريًا</li><li><Clock3 /> {plan.duration} دقيقة لكل حصة</li><li><Check /> حصص فردية وفق المستوى والهدف</li></ul>
          <Button asChild variant={plan.featured ? 'default' : 'outline'} className="action"><a href={subscriptionLink(`باقة ${plan.name}`)}>اشترك في {plan.name} <ArrowLeft /></a></Button>
        </article>)}</div>
        <div className="group-offer"><div><h3>تبحثين عن حلقة جماعية؟</h3><p>تقييم قبل الانضمام، ومجموعات حسب المستوى والهدف.</p></div><div className="group-prices"><div><strong>{groupProgram.egypt.join('–')} <small>جنيه</small></strong><span>مصر · شهريًا</span></div><div><strong>{groupProgram.jordan.join('–')} <small>دينار</small></strong><span>الأردن · شهريًا</span></div></div><Button asChild variant="outline" className="action"><a href={subscriptionLink('الحلقات الجماعية للنساء')}>تفاصيل الاشتراك <ArrowLeft /></a></Button></div>
      </div></section>
      <section className="section" id="subscribe"><div className="site-container">
        <div className="section-heading"><p className="section-label">طريقة الاشتراك</p><h2>رحلتك تبدأ بثلاث خطوات</h2><p className="section-intro">نتعرّف على احتياجك أولًا، لنختار معًا البداية المناسبة.</p></div>
        <div className="steps"><article className="step"><div className="step-number"><span>01 — التواصل</span><Mail /></div><h3>أخبرنا عن هدفك</h3><p>راسلنا عبر البريد الإلكتروني باسمك، والعمر، والدولة، والبرنامج الذي ترغب في الانضمام إليه.</p></article><article className="step"><div className="step-number"><span>02 — التقييم</span><Target /></div><h3>نحدّد نقطة البداية</h3><p>نتواصل معك لترتيب تقييم المستوى، وتحديد المسار والمواعيد المناسبة لك أو لطفلك.</p></article><article className="step"><div className="step-number"><span>03 — الانضمام</span><Sparkles /></div><h3>اختر باقتك وابدأ</h3><p>بعد تحديد البرنامج، نرسل لك تفاصيل الاشتراك وطريقة الدفع، ثم نؤكد معك موعد البداية.</p></article></div>
      </div></section>
      <section className="contact-band" id="contact"><div className="site-container contact-inner"><div><h2>كل رحلة كبيرة تبدأ بخطوة.</h2><p>يسعدنا أن نجيب عن أسئلتك ونساعدك في اختيار البرنامج المناسب.</p></div><Button asChild variant="secondary" className="action contact-email"><a href={subscriptionLink('برامج أكاديمية علو الهمة')}><Mail size={20} /><span dir="ltr">{contactEmail}</span><ArrowLeft /></a></Button></div></section>
    </main>
    <footer><div className="site-container footer-inner"><Brand /><span className="footer-note">© {new Date().getUTCFullYear()} أكاديمية علو الهمة. جميع الحقوق محفوظة.</span></div></footer>
  </div>;
}
