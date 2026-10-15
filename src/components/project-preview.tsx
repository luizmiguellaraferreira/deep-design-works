import burgerImage from "@/assets/burger.jpg";
import cakeImage from "@/assets/patisserie.jpg";
import climateImage from "@/assets/climate.jpg";
import { ArrowUpRight, Snowflake } from "lucide-react";

export type ProjectKind = "burger" | "cake" | "climate";
export const projects: { kind: ProjectKind; name: string; category: string; description: string }[] = [
  { kind: "burger", name: "Burger House", category: "Gastronomia", description: "Uma experiência de dar água na boca. Identidade marcante e um cardápio que abre o apetite." },
  { kind: "cake", name: "Doce Ateliê", category: "Confeitaria artesanal", description: "Delicadeza em cada detalhe. Um catálogo visual que traduz o cuidado da confeitaria artesanal." },
  { kind: "climate", name: "Clima Pro", category: "Serviços especializados", description: "Clareza que transmite confiança. Serviços bem apresentados e um caminho direto para o contato." },
];

export function ProjectPreview({ kind, hero = false }: { kind: ProjectKind; hero?: boolean }) {
  return <div className={`browser-window preview-${kind}`}>
    <div className="browser-chrome"><span/><span/><span/><div>{kind === "burger" ? "burgerhouse" : kind === "cake" ? "doceatelie" : "climapro"}.example</div><ArrowUpRight size={9}/></div>
    {kind === "burger" ? <div className="mini-site burger-site">
      <div className="mini-nav"><b>BURGER<span>HOUSE.</span></b><span>O sabor é outro nível.</span><span className="mini-cta">FAÇA SEU PEDIDO ↗</span></div>
      <div className="mini-body"><div className="mini-copy"><span className="mini-eyebrow">ARTESANAL DE VERDADE</span><h3>NÃO É SÓ<br/>UM BURGER.<br/><em>É O SEU.</em></h3><p>Feito na brasa. Montado com atitude.<br/>Sabor que você não esquece.</p><span className="mini-cta">EXPLORAR CARDÁPIO ↗</span></div><img src={burgerImage} alt="Hambúrguer artesanal com queijo e pão brioche" width={1200} height={912} loading={hero ? "eager" : "lazy"}/></div>
      <div className="mini-bottom"><span>100% ARTESANAL</span><span>INGREDIENTES SELECIONADOS</span><span>FEITO NA BRASA</span></div>
    </div> : kind === "cake" ? <div className="mini-site cake-site">
      <div className="mini-nav"><b>doce ateliê<span>CONFEITARIA ARTESANAL</span></b><span>Feito com carinho.</span><span className="mini-cta">Encomende ↗</span></div>
      <div className="mini-body"><div className="mini-copy"><span className="mini-eyebrow">PARA OS MOMENTOS ESPECIAIS</span><h3>Um pouco<br/>de doçura.<br/><em>Muito afeto.</em></h3><p>Doces feitos à mão para transformar<br/>momentos em boas memórias.</p><span className="mini-cta">Conheça nossas criações ↗</span></div><img src={cakeImage} alt="Bolo artesanal de morango e doces delicados" width={1200} height={912} loading="lazy"/></div>
      <div className="mini-bottom"><span>BOLOS & TORTAS</span><span>DOCES ARTESANAIS</span><span>MOMENTOS ESPECIAIS</span></div>
    </div> : <div className="mini-site climate-site">
      <div className="mini-nav"><b><Snowflake size={16}/>clima<span>pro</span></b><span>Seu ambiente. Mais conforto.</span><span className="mini-cta">Solicitar orçamento ↗</span></div>
      <div className="mini-body"><div className="mini-copy"><span className="mini-eyebrow">CLIMATIZAÇÃO COM CUIDADO</span><h3>O clima ideal<br/>para viver<br/><em>melhor.</em></h3><p>Instalação, manutenção e limpeza.<br/>Conforto em todos os ambientes.</p><span className="mini-cta">Conheça nossos serviços ↗</span></div><img src={climateImage} alt="Sala moderna com ar-condicionado instalado" width={1200} height={912} loading="lazy"/></div>
      <div className="mini-bottom"><span>INSTALAÇÃO</span><span>MANUTENÇÃO</span><span>HIGIENIZAÇÃO</span></div>
    </div>}
  </div>;
}
