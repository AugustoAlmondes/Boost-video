import './style.css';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import { motion as MOTION} from 'framer-motion';

export default function Testimony() {
    const depoimentos = [
        {
            nome: "Mariana Costa",
            cargo: "CMO - Agência Criativa",
            texto: "A análise de performance da plataforma nos ajudou a triplicar nosso engajamento em campanhas. Recomendo fortemente!",
            imagem: "/img/fernanda.jpeg"
        },
        {
            nome: "Carlos Silva",
            cargo: "Growth Hacker - StartupX",
            texto: "Ver o desempenho antes de lançar a campanha nos fez economizar tempo e dinheiro. Ferramenta indispensável.",
            imagem: "/img/carlos.jpeg"
        },
        {
            nome: "Fernanda Lima",
            cargo: "Social Media - MarcaZ",
            texto: "A interface é intuitiva e os insights são poderosos. Melhor investimento em mídia que fizemos esse ano!",
            imagem: "/img/mariana.jpeg"
        }
    ];

    return (
        <>
            <section className="depoimentos-container">
                <MOTION.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Trusted by Content Creators
                </MOTION.h2>

                <div className="cards-wrapper">
                    {depoimentos.map((d, i) => (
                        <MOTION.div
                            className="card-depoimento"
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img src={d.imagem} alt={d.nome} className="avatar" />
                            <p className="texto">“{d.texto}”</p>
                            <p className="nome">{d.nome}</p>
                            <p className="cargo">{d.cargo}</p>
                        </MOTION.div>
                    ))}
                </div>
            </section>
            <AnimatedBackground />
        </>
    );
}
