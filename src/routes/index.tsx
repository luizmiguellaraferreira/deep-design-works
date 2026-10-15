import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, ArrowDown, Menu, X, Code2, Monitor, Layers, MousePointer2, Palette, LayoutTemplate, ShoppingBag, BriefcaseBusiness, RefreshCw, MessageCircle, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ProjectPreview, projects, type ProjectKind } from "@/components/project-preview";
import { getWhatsAppUrl } from "@/lib/site-config";
import climateImage from "@/assets/climate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Web Creation — Sites profissionais por Luiz Miguel" },
    { name: "description", content: "Sites modernos, estratégicos e personalizados para empresas e profissionais autônomos. Conheça a Web Creation e nossos conceitos de design." },
    { property: "og:title", content: "Web Creation — Seu negócio, uma presença digital extraordinária" },
    { property: "og:description", content: "Design personalizado e desenvolvimento web para valorizar seu negócio. Conheça projetos conceituais e converse com Luiz Miguel." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
const navItems = [{ label: "Início", id: "inicio" }, { label: "Sobre", id: "sobre" }, { label: "Projetos", id: "projetos" }, { label: "Serviços", id: "servicos" }, { label: "Contato", id: "contato" }];
const principles = [
  { icon: Palette, title: "Design personalizado", text: "Cada negócio tem sua identidade. Os projetos são pensados para valorizar as características de cada cliente." },
  { icon: MousePointer2, title: "Experiência do usuário", text: "Informações organizadas, navegação intuitiva e acesso fácil aos canais de contato." },
  { icon: Layers, title: "Soluções acessíveis", text: "Desenvolvimento pensado para as necessidades de empresas, microempreendedores e profissionais autônomos." },
];
const services = [
  { icon: Monitor, title: "Sites institucionais", text: "Apresentação profissional da empresa, seus serviços, localização e canais de contato." },
  { icon: LayoutTemplate, title: "Landing pages", text: "Páginas focadas em apresentar uma oferta ou serviço específico, com clareza e personalidade." },
  { icon: ShoppingBag, title: "Catálogos digitais", text: "Organização visual de produtos e informações, com acesso fácil aos canais de contato." },
  { icon: BriefcaseBusiness, title: "Portfólios profissionais", text: "Seus trabalhos, projetos e serviços em uma apresentação que valoriza o que você faz." },
  { icon: RefreshCw, title: "Redesign de sites", text: "Modernização visual e reorganização de páginas existentes para uma experiência mais atual." },
];
const steps = [
  { title: "Conversa inicial", text: "Entendemos seu negócio, suas necessidades e o que você deseja alcançar." },
  { title: "Planejamento", text: "Definimos a estrutura, o conteúdo e a direção visual do projeto." },
  { title: "Desenvolvimento", text: "Transformamos a proposta em um site organizado, responsivo e alinhado à identidade do negócio." },
  { title: "Publicação", text: "Após a aprovação e a definição da hospedagem e do domínio, preparamos o site para ficar disponível na internet." },
];
function Brand() { return <a href="#inicio" className="brand" aria-label="Web Creation — início"><span className="brand-mark" aria-hidden="true">&lt;/&gt;</span><span>web creation<span className="brand-dot">.</span></span></a>; }
function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><span className="eyebrow-dot"/>{children}</div>; }
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [preview, setPreview] = useState<ProjectKind | null>(null);
  const whatsappUrl = getWhatsAppUrl();
  const selectedProject = projects.find(p => p.kind === preview);
  function ContactButton({ children, className = "studio-button", variant = "default" }: { children: React.ReactNode; className?: string; variant?: "default" | "outline" | "ghost" }) {
    return whatsappUrl ? <Button asChild variant={variant} className={className}><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight/></a></Button> : <Button variant={variant} className={className} onClick={() => setContactOpen(true)}>{children}<ArrowUpRight/></Button>;
  }
  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <header className="container-shell site-header" id="inicio"><Brand/><nav className="desktop-nav" aria-label="Navegação principal">{navItems.map(n => <a key={n.id} href={`#${n.id}`} className={`nav-link ${n.id === "inicio" ? "active" : ""}`}>{n.label}</a>)}</nav><div className="header-actions"><ContactButton className="header-button" variant="outline">Vamos conversar</ContactButton><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></div>{menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Navegação móvel">{navItems.map(n => <a key={n.id} href={`#${n.id}`} className="nav-link" onClick={() => setMenuOpen(false)}>{n.label}</a>)}</nav>}</header>
    <main id="conteudo">
      <section className="hero"><div className="container-shell"><div className="hero-layout"><div className="enter"><Eyebrow>WEB CREATION • DESENVOLVIMENTO WEB</Eyebrow><h1>Seu negócio merece uma <span className="gradient-text">presença digital</span> extraordinária.</h1><p className="hero-description">Criamos sites modernos, estratégicos e personalizados para apresentar seu negócio ao mundo e facilitar o contato com seus clientes.</p><div className="hero-buttons"><ContactButton>Solicitar orçamento</ContactButton><Button asChild variant="outline" className="studio-button"><a href="#projetos">Explorar projetos<ArrowDown/></a></Button></div><div className="hero-note"><Check size={13}/><span>Design com propósito. Desenvolvimento com cuidado.</span></div></div><div className="hero-art enter" aria-label="Mockups de projetos conceituais em computador, tablet e celular"><span className="art-label">IDEIAS QUE GANHAM FORMA.</span><div className="hero-desktop"><ProjectPreview kind="burger" hero/></div><div className="hero-cake"><ProjectPreview kind="cake"/></div><div className="hero-phone"><div className="phone-island"/><div className="phone-content"><b>clima pro.</b><h3>O clima ideal<br/>para viver<br/>melhor.</h3><img src={climateImage} alt="Conceito Clima Pro no celular" width={1200} height={912} loading="lazy"/><p>INSTALAÇÃO · MANUTENÇÃO<br/>Conforto para o seu ambiente.</p></div></div></div></div><div className="hero-bottom"><span><Monitor size={15}/>Pensado para todos os dispositivos</span><span><Palette size={15}/>Identidade única para cada negócio</span><span><Code2 size={15}/>Do conceito à presença digital</span></div></div></section>
      <section className="section" id="projetos"><div className="container-shell"><div className="section-top"><div><Eyebrow>PORTFÓLIO SELECIONADO</Eyebrow><h2 className="section-heading">Projetos que transformam ideias<br className="hidden lg:block"/> em <span className="muted-word">experiências digitais.</span></h2><p className="section-description">Conheça algumas possibilidades de como um site pode apresentar e valorizar diferentes tipos de negócio.</p></div><span className="section-index">01 — PROJETOS CONCEITUAIS</span></div><div className="project-grid">{projects.map((p, i) => <article className="project-card" key={p.kind}><div className="project-image"><ProjectPreview kind={p.kind}/></div><div className="project-info"><span className="project-category">0{i + 1} / {p.category}</span><div className="project-title-row"><h3>{p.name}</h3><Button variant="ghost" size="icon" aria-label={`Ampliar mockup de ${p.name}`} title="Ampliar mockup" onClick={() => setPreview(p.kind)}><ArrowUpRight/></Button></div><p>{p.description}</p><span className="concept-label"><span className="eyebrow-dot"/>Projeto conceitual</span></div></article>)}</div></div></section>
      <section className="section" id="sobre"><div className="container-shell"><div className="about-layout"><div><Eyebrow>A ESSÊNCIA DA WEB CREATION</Eyebrow><h2 className="section-heading">Mais do que um site.<br/><span className="muted-word">Uma presença digital pensada para o seu negócio.</span></h2></div><div className="about-copy"><p>A Web Creation nasceu com a proposta de tornar a presença digital mais acessível para empresas e profissionais que desejam apresentar melhor seus serviços na internet.</p><p>À frente do projeto está <strong>Luiz Miguel</strong>, estudante de Desenvolvimento de Sistemas e Informática na <strong>ETEC</strong>, que une aprendizado técnico, criatividade e interesse por desenvolvimento web para criar experiências digitais personalizadas.</p><p>Cada projeto é pensado de acordo com as necessidades e os objetivos do negócio, com atenção ao design, à organização das informações e à facilidade de navegação.</p><div className="founder"><div className="founder-avatar">LM</div><div><b>Luiz Miguel</b><span>Design, código e vontade de criar.</span></div></div></div></div><div className="principles">{principles.map((p, i) => <article className="principle" key={p.title}><div className="principle-top"><p.icon size={21}/><span>0{i+1}</span></div><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>
      <section className="section" id="servicos"><div className="container-shell"><div className="section-top"><div><Eyebrow>O QUE PODEMOS CRIAR</Eyebrow><h2 className="section-heading">Soluções digitais para<br/><span className="muted-word">diferentes necessidades.</span></h2></div><span className="section-index">DESIGN + DESENVOLVIMENTO</span></div><div className="services-grid">{services.map(s => <article className="service" key={s.title}><s.icon className="service-icon" size={25} strokeWidth={1.4}/><h3>{s.title}</h3><p>{s.text}</p></article>)}<div className="service service-contact"><Sparkles className="service-icon" size={24} strokeWidth={1.4}/><h3>Uma ideia diferente?</h3><p>Vamos encontrar o formato que faz sentido para o seu negócio.</p><ContactButton variant="ghost" className="mt-5 px-0 text-primary">Conte sua ideia</ContactButton></div></div></div></section>
      <section className="section" id="processo"><div className="container-shell"><Eyebrow>UM PROCESSO CLARO, DO INÍCIO AO FIM</Eyebrow><h2 className="section-heading">Do primeiro contato <span className="muted-word">à publicação.</span></h2><div className="process-grid">{steps.map((s,i) => <article className="step" key={s.title}><div className="step-number">0{i+1}</div><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>
      <section className="contact-section" id="contato"><div className="container-shell"><Eyebrow>VAMOS TIRAR SUA IDEIA DO PAPEL</Eyebrow><h2>Seu próximo projeto<br/>pode <span className="gradient-text">começar aqui.</span></h2><p>Tem uma empresa, um serviço ou uma ideia que merece uma presença digital melhor? Vamos conversar sobre as possibilidades.</p><ContactButton><MessageCircle/>Vamos conversar</ContactButton></div></section>
    </main>
    <footer className="footer"><div className="container-shell"><div className="footer-top"><div><Brand/><p className="footer-tagline">Ideias que ganham forma na web.</p></div><nav className="desktop-nav footer-nav" aria-label="Navegação do rodapé">{navItems.map(n => <a className="nav-link" key={n.id} href={`#${n.id}`}>{n.label}</a>)}</nav></div><div className="footer-bottom"><span>© {new Date().getUTCFullYear()} Web Creation. Todos os direitos reservados.</span><span>Feito com cuidado, por Luiz Miguel.<span className="brand-dot"> ↗</span></span></div></div></footer>
    <Dialog open={contactOpen} onOpenChange={setContactOpen}><DialogContent><DialogTitle>Vamos conversar</DialogTitle><DialogDescription>O WhatsApp da Web Creation será disponibilizado em breve. O número de contato ainda está sendo confirmado.</DialogDescription><Button variant="outline" onClick={() => setContactOpen(false)}>Voltar ao portfólio<ArrowRight/></Button></DialogContent></Dialog>
    <Dialog open={preview !== null} onOpenChange={open => { if (!open) setPreview(null); }}><DialogContent className="preview-modal"><DialogTitle>{selectedProject?.name} — demonstração de design</DialogTitle><DialogDescription>Projeto conceitual fictício. Esta é uma prévia visual, não um site de cliente real.</DialogDescription>{preview && <ProjectPreview kind={preview}/>}</DialogContent></Dialog>
  </>;
}
