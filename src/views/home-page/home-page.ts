import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./home-page.css";

export class Potifolio {

   constructor(){
      const imageKeys = Object.keys(this.conteudoTecnologias);
      imageKeys.forEach((keyTech) => {
         const imageElement = document.getElementById(`${keyTech}Image`);
         
         if (imageElement) {
            imageElement.addEventListener("mouseover", () => {
               this.atualizaTecnologias(keyTech);
            });
         }
      });
   }
   
   
   conteudoTecnologias: any = {
      dotnet: { title: ".NET", description: ".NET Core é um framework de código aberto, desenvolvido pela Microsoft, projetado para a criação de aplicativos modernos e escaláveis. Com suporte multiplataforma, o .NET Core oferece flexibilidade e desempenho excepcionais, permitindo o desenvolvimento de soluções inovadoras em diversas plataformas, incluindo Windows, Linux e macOS." },
      csharp: { title: "C#", description: "C# é uma linguagem de programação desenvolvida pela Microsoft, conhecida por sua versatilidade e eficiência. Com foco em segurança e desempenho, C# é amplamente utilizada para desenvolvimento de aplicações modernas e robustas." },
      angular: { title: "Angular", description: "Angular é um poderoso framework para construção de aplicações web. Desenvolvido pelo Google, ele oferece estrutura modular, facilitando a criação de aplicações escaláveis e de fácil manutenção." },
      typescript: { title: "TypeScript", description: "TypeScript é uma linguagem de programação desenvolvida e mantida pela Microsoft. Oferecendo vinculação de tipos estritos para JavaScript, o TypeScript eleva a qualidade do código, prevenindo erros durante o desenvolvimento e garantindo entregas mais confiáveis aos clientes." },
      visualstudio: { title: "Visual Studio", description: "Visual Studio é um ambiente de desenvolvimento integrado (IDE) da Microsoft, amplamente utilizado para criação e depuração de software. Com suporte a várias linguagens, é uma ferramenta essencial para desenvolvedores que buscam eficiência e produtividade." },
      bootstrap: { title: "Bootstrap", description: "Bootstrap é um framework de design responsivo, facilitando a criação de interfaces modernas e agradáveis. Com componentes reutilizáveis, o Bootstrap agiliza o desenvolvimento front-end, proporcionando uma experiência visual consistente." },
      sqlserver: { title: "SQL Server", description: "SQL Server é um sistema de gerenciamento de banco de dados relacional da Microsoft. Reconhecido por sua confiabilidade e desempenho, o SQL Server é amplamente utilizado para armazenamento e recuperação eficientes de dados em aplicações empresariais." },
      github: { title: "GitHub", description: "GitHub é uma plataforma de hospedagem de código-fonte e colaboração. Essencial para o desenvolvimento colaborativo, o GitHub simplifica o versionamento de código, facilitando a contribuição de equipes distribuídas." },
      // Adicione mais conforme necessário
   };
   
   atualizaTecnologias(imageKey: any) {
      const contentContainer = document.getElementById("pnlTecnologias");
      const content = this.conteudoTecnologias[imageKey];
      
      if (content) {
         contentContainer!.innerHTML = `
         <div>
         <div class="row">
         <div class="col fw-200 text-light">
         <h5>${content.title}</h5>
         <div class="border-bottom border-warning"></div>
         <p class="mt-3">${content.description}</p>
         </div>
         </div>
         </div>
         `;
      }
   }
   
}

window.addEventListener('load', () => new Potifolio)