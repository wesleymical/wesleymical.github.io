// Translations for the website
const translations = {
    'pt-BR': {
        // Home Page
        home: {
            title: 'Mago Supremo',
            subtitle: 'Sistemas e Consultoria',
            connect: 'Connect',
            email: 'wesley.msantos@parceiroslinx.com.br',
            footer1: '~/copyright © 2025 | developed by',
            footer2: '// todos os direitos reservados',
            linkedinTitle: 'Conecte-se no LinkedIn',
            linkedinDesc: 'Desenvolvedor e Consultor especializado em soluções Linx para varejo',
            viewProfile: 'Ver Perfil Completo'
        },
        // Navigation
        nav: {
            home: 'Home',
            dev: 'Desenvolvedor',
            consultant: 'Consultor',
            lsp: 'LSP'
        },
        // Developer Page
        developer: {
            title: 'Desenvolvedor Linx',
            subtitle: 'Cloud Computing, APIs e Processamento de Dados',
            cloudTitle: 'Cloud Computing & AWS',
            cloudRole: 'Desenvolvedor Cloud AWS',
            cloudDesc: 'Atuação no desenvolvimento e manutenção de sistemas em cloud computing, com foco em arquitetura serverless e integração de serviços AWS para soluções de varejo.',
            cloudAchievements: 'Principais Realizações:',
            cloudAch1: 'Gerenciamento completo de serviços AWS via Console, incluindo provisionamento de instâncias EC2 e configuração de buckets S3',
            cloudAch2: 'Desenvolvimento de funções Lambda para processamento assíncrono e automação de tarefas',
            cloudAch3: 'Implementação de filas SQS para comunicação entre microsserviços',
            cloudAch4: 'Configuração de políticas IAM para controle de acesso e segurança',
            apiTitle: 'Desenvolvimento de APIs',
            apiRole: 'Integração API REST',
            apiDesc: 'Desenvolvimento e integração de APIs RESTful para comunicação entre sistemas de varejo, garantindo escalabilidade e performance nas operações.',
            apiAch1: 'Criação de endpoints RESTful para integração com sistemas de varejo',
            apiAch2: 'Implementação de autenticação e autorização em APIs',
            apiAch3: 'Otimização de queries SQL para melhor performance',
            apiAch4: 'Documentação técnica de APIs para equipes de desenvolvimento',
            dataTitle: 'Processamento de Dados',
            dataRole: 'Manipulação de Dados',
            dataDesc: 'Desenvolvimento de scripts e aplicações para processamento e transformação de dados em diferentes formatos, garantindo integridade e qualidade nas operações de ETL.',
            dataAch1: 'Desenvolvimento de scripts Python para transformação de dados JSON e CSV',
            dataAch2: 'Automação de processos de importação e exportação de dados',
            dataAch3: 'Validação e limpeza de dados para garantir qualidade',
            dataAch4: 'Criação de pipelines de dados integrados com serviços AWS',
            stackTitle: 'Stack Tecnológico',
            backToHome: '← Voltar para Home'
        },
        // Consultant Page
        consultant: {
            title: 'Consultor de Varejo',
            subtitle: 'Implantação de Produtos Linx para o Mercado de Varejo',
            implTitle: 'Implantação de Soluções Linx',
            implRole: 'Consultor de Implantação',
            implDesc: 'Atuação como consultor especializado na implantação de soluções Linx para clientes do varejo, garantindo a configuração adequada dos sistemas e treinamento das equipes para máxima eficiência operacional.',
            implAch1: 'Implantação completa de sistemas Linx ERP em clientes de médio e grande porte do varejo',
            implAch2: 'Configuração e parametrização de módulos de gestão, estoque, fiscal e financeiro',
            implAch3: 'Treinamento de equipes operacionais e gerenciais nos sistemas Linx',
            implAch4: 'Customização de processos para atender necessidades específicas de cada cliente',
            posTitle: 'Soluções de Ponto de Venda',
            posRole: 'Implantação Linx POS',
            posDesc: 'Implementação de soluções de ponto de venda (PDV) para operações de varejo, incluindo configuração de hardware, integração com sistemas de retaguarda e treinamento operacional.',
            posAch1: 'Configuração de terminais de ponto de venda em múltiplas lojas',
            posAch2: 'Integração com sistemas de pagamento e emissores fiscais',
            posAch3: 'Suporte na adequação fiscal e regulatória dos sistemas',
            posAch4: 'Acompanhamento de go-live e estabilização pós-implantação',
            processTitle: 'Consultoria de Processos',
            processRole: 'Otimização de Processos de Varejo',
            processDesc: 'Análise e melhoria de processos operacionais de varejo, aplicando melhores práticas do mercado e otimizando o uso das soluções Linx para maximizar resultados dos clientes.',
            processAch1: 'Mapeamento e redesenho de processos de vendas, estoque e logística',
            processAch2: 'Implementação de melhores práticas do varejo em clientes',
            processAch3: 'Análise de indicadores e proposta de melhorias operacionais',
            processAch4: 'Documentação técnica e funcional das implantações realizadas',
            processAch5: 'Suporte pós-implantação e evolução contínua dos processos',
            portfolioTitle: 'Portfólio de Clientes',
            portfolioDesc: 'Experiência em projetos de implantação para diversos segmentos do varejo, incluindo:',
            portfolio1: 'Moda e Vestuário',
            portfolio2: 'Farmácias e Drogarias',
            portfolio3: 'Supermercados e Alimentação',
            portfolio4: 'Lojas de Departamento',
            portfolio5: 'Varejo Especializado'
        },
        // LSP Page
        lsp: {
            title: 'Linx Solution Partner',
            subtitle: 'Consultoria Especializada e Projetos de Alta Complexidade',
            recentExp: 'Experiência Recente',
            hmTitle: 'Projeto H&M Brasil',
            hmRole: 'Implantação H&M',
            hmDesc: 'Consultoria especializada na implantação dos sistemas Linx para a H&M no mercado brasileiro, um dos maiores projetos de varejo de moda do país, coordenando equipes multidisciplinares e garantindo a entrega dentro dos prazos e padrões de qualidade exigidos.',
            hmAch1: 'Liderança técnica na implantação de sistemas Linx para operação da H&M no Brasil',
            hmAch2: 'Coordenação com equipes internacionais e adequação aos padrões globais da marca',
            hmAch3: 'Customização de processos para atender requisitos específicos do varejo de moda internacional',
            hmAch4: 'Garantia de integração perfeita entre todos os módulos e sistemas',
            hmAch5: 'Suporte estratégico durante fase de go-live e estabilização',
            pilotTitle: 'Piloto de Novos Produtos Linx',
            equalsRole: 'Conciliador Equals para Linx ERP',
            equalsDesc: 'Participação como piloto na implementação e homologação do Conciliador Equals integrado ao Linx ERP, sistema de conciliação financeira e bancária que automatiza processos de fechamento contábil.',
            equalsAch1: 'Validação de funcionalidades e processos de conciliação financeira',
            equalsAch2: 'Testes de integração entre Equals e Linx ERP',
            equalsAch3: 'Feedback técnico para evolução do produto',
            equalsAch4: 'Documentação de casos de uso e melhores práticas',
            smartRole: 'SmartPOS para Linx POS',
            smartDesc: 'Piloto de nova solução de ponto de venda inteligente, testando funcionalidades avançadas de mobilidade, integração com pagamentos e experiência omnichannel.',
            smartAch1: 'Validação de usabilidade e performance do SmartPOS',
            smartAch2: 'Testes de integração com diferentes meios de pagamento',
            smartAch3: 'Avaliação de funcionalidades omnichannel',
            smartAch4: 'Sugestões de melhorias baseadas em experiência de campo',
            omniRole: 'Linx OmniPOS',
            omniDesc: 'Participação no piloto da solução OmniPOS, plataforma unificada para operações de venda física e digital, integrando múltiplos canais em uma única experiência.',
            omniAch1: 'Testes de funcionalidades omnichannel avançadas',
            omniAch2: 'Validação de integrações entre canais físico e digital',
            omniAch3: 'Análise de performance e escalabilidade da plataforma cloud',
            omniAch4: 'Contribuição para roadmap de evolução do produto',
            consultTitle: 'Consultoria LSP',
            consultRole: 'Consultoria para Linx e Clientes',
            consultDesc: 'Atuação como consultor especializado oferecendo suporte técnico e estratégico tanto para a Linx quanto para seus clientes, com foco em projetos complexos e soluções inovadoras.',
            consultAch1: 'Consultoria estratégica para clientes de alto valor da Linx',
            consultAch2: 'Suporte em projetos de transformação digital no varejo',
            consultAch3: 'Validação técnica de novas funcionalidades e produtos Linx',
            consultAch4: 'Treinamento e capacitação de equipes técnicas',
            consultAch5: 'Participação em definições de roadmap de produtos'
        },
        common: {
            achievements: 'Principais Realizações:',
            period: 'Linx',
            lspPeriod: 'LSP Linx',
            lsp: 'LSP'
        }
    },
    'en': {
        // Home Page
        home: {
            title: 'Supreme Wizard',
            subtitle: 'Systems and Consulting',
            connect: 'Connect',
            email: 'wesley.msantos@parceiroslinx.com.br',
            footer1: '~/copyright © 2025 | developed by',
            footer2: '// all rights reserved',
            linkedinTitle: 'Connect on LinkedIn',
            linkedinDesc: 'Developer and Consultant specialized in Linx solutions for retail',
            viewProfile: 'View Full Profile'
        },
        // Navigation
        nav: {
            home: 'Home',
            dev: 'Developer',
            consultant: 'Consultant',
            lsp: 'LSP'
        },
        // Developer Page
        developer: {
            title: 'Linx Developer',
            subtitle: 'Cloud Computing, APIs and Data Processing',
            cloudTitle: 'Cloud Computing & AWS',
            cloudRole: 'Cloud Developer AWS',
            cloudDesc: 'Development and maintenance of cloud computing systems, focusing on serverless architecture and AWS services integration for retail solutions.',
            cloudAchievements: 'Key Achievements:',
            cloudAch1: 'Complete AWS services management via Console, including EC2 instance provisioning and S3 bucket configuration',
            cloudAch2: 'Lambda functions development for asynchronous processing and task automation',
            cloudAch3: 'SQS queues implementation for microservices communication',
            cloudAch4: 'IAM policies configuration for access control and security',
            apiTitle: 'API Development',
            apiRole: 'REST API Integration',
            apiDesc: 'Development and integration of RESTful APIs for communication between retail systems, ensuring scalability and performance.',
            apiAch1: 'RESTful endpoints creation for retail systems integration',
            apiAch2: 'Authentication and authorization implementation in APIs',
            apiAch3: 'SQL queries optimization for better performance',
            apiAch4: 'Technical API documentation for development teams',
            dataTitle: 'Data Processing',
            dataRole: 'Data Manipulation',
            dataDesc: 'Development of scripts and applications for data processing and transformation in different formats, ensuring integrity and quality in ETL operations.',
            dataAch1: 'Python scripts development for JSON and CSV data transformation',
            dataAch2: 'Automation of data import and export processes',
            dataAch3: 'Data validation and cleaning to ensure quality',
            dataAch4: 'Data pipelines creation integrated with AWS services',
            stackTitle: 'Technology Stack',
            backToHome: '← Back to Home'
        },
        // Consultant Page
        consultant: {
            title: 'Retail Consultant',
            subtitle: 'Linx Products Implementation for Retail Market',
            implTitle: 'Linx Solutions Implementation',
            implRole: 'Implementation Consultant',
            implDesc: 'Acting as a specialized consultant in implementing Linx solutions for retail clients, ensuring proper system configuration and team training for maximum operational efficiency.',
            implAch1: 'Complete Linx ERP systems implementation for medium and large retail clients',
            implAch2: 'Configuration and parameterization of management, inventory, tax and financial modules',
            implAch3: 'Training of operational and management teams on Linx systems',
            implAch4: 'Process customization to meet specific needs of each client',
            posTitle: 'Point of Sale Solutions',
            posRole: 'Linx POS Implementation',
            posDesc: 'Implementation of point of sale (POS) solutions for retail operations, including hardware configuration, backoffice systems integration and operational training.',
            posAch1: 'Point of sale terminals configuration in multiple stores',
            posAch2: 'Integration with payment systems and fiscal printers',
            posAch3: 'Support in fiscal and regulatory compliance of systems',
            posAch4: 'Go-live monitoring and post-implementation stabilization',
            processTitle: 'Process Consulting',
            processRole: 'Retail Process Optimization',
            processDesc: 'Analysis and improvement of retail operational processes, applying market best practices and optimizing the use of Linx solutions to maximize client results.',
            processAch1: 'Mapping and redesign of sales, inventory and logistics processes',
            processAch2: 'Implementation of retail best practices in clients',
            processAch3: 'Analysis of indicators and operational improvement proposals',
            processAch4: 'Technical and functional documentation of implementations',
            processAch5: 'Post-implementation support and continuous process evolution',
            portfolioTitle: 'Client Portfolio',
            portfolioDesc: 'Experience in implementation projects for various retail segments, including:',
            portfolio1: 'Fashion and Apparel',
            portfolio2: 'Pharmacies and Drugstores',
            portfolio3: 'Supermarkets and Food',
            portfolio4: 'Department Stores',
            portfolio5: 'Specialized Retail'
        },
        // LSP Page
        lsp: {
            title: 'Linx Solution Partner',
            subtitle: 'Specialized Consulting and High Complexity Projects',
            recentExp: 'Recent Experience',
            hmTitle: 'H&M Brazil Project',
            hmRole: 'H&M Implementation',
            hmDesc: 'Specialized consulting in implementing Linx systems for H&M in the Brazilian market, one of the largest fashion retail projects in the country, coordinating multidisciplinary teams and ensuring delivery within deadlines and required quality standards.',
            hmAch1: 'Technical leadership in Linx systems implementation for H&M operation in Brazil',
            hmAch2: 'Coordination with international teams and adaptation to global brand standards',
            hmAch3: 'Process customization to meet specific international fashion retail requirements',
            hmAch4: 'Ensuring perfect integration between all modules and systems',
            hmAch5: 'Strategic support during go-live and stabilization phase',
            pilotTitle: 'Linx New Products Pilot',
            equalsRole: 'Equals Reconciliation for Linx ERP',
            equalsDesc: 'Participation as pilot in the implementation and approval of Equals Reconciliation integrated with Linx ERP, financial and banking reconciliation system that automates accounting closing processes.',
            equalsAch1: 'Validation of financial reconciliation functionalities and processes',
            equalsAch2: 'Integration tests between Equals and Linx ERP',
            equalsAch3: 'Technical feedback for product evolution',
            equalsAch4: 'Use case documentation and best practices',
            smartRole: 'SmartPOS for Linx POS',
            smartDesc: 'Pilot of new intelligent point of sale solution, testing advanced mobility features, payment integration and omnichannel experience.',
            smartAch1: 'Validation of SmartPOS usability and performance',
            smartAch2: 'Integration tests with different payment methods',
            smartAch3: 'Evaluation of omnichannel functionalities',
            smartAch4: 'Improvement suggestions based on field experience',
            omniRole: 'Linx OmniPOS',
            omniDesc: 'Participation in OmniPOS solution pilot, unified platform for physical and digital sales operations, integrating multiple channels in a single experience.',
            omniAch1: 'Advanced omnichannel functionalities testing',
            omniAch2: 'Integration validation between physical and digital channels',
            omniAch3: 'Performance and scalability analysis of cloud platform',
            omniAch4: 'Contribution to product evolution roadmap',
            consultTitle: 'LSP Consulting',
            consultRole: 'Consulting for Linx and Clients',
            consultDesc: 'Acting as specialized consultant offering technical and strategic support for both Linx and its clients, focusing on complex projects and innovative solutions.',
            consultAch1: 'Strategic consulting for high-value Linx clients',
            consultAch2: 'Support in digital transformation projects in retail',
            consultAch3: 'Technical validation of new Linx functionalities and products',
            consultAch4: 'Training and capacity building of technical teams',
            consultAch5: 'Participation in product roadmap definitions'
        },
        common: {
            achievements: 'Key Achievements:',
            period: 'Linx',
            lspPeriod: 'LSP Linx',
            lsp: 'LSP'
        }
    }
};

// Language detection and management
class LanguageManager {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // Check stored preference
        const stored = localStorage.getItem('preferredLanguage');
        if (stored && translations[stored]) {
            return stored;
        }

        // Detect from browser/geolocation
        const browserLang = navigator.language || navigator.userLanguage;
        
        // If browser is set to Portuguese, use pt-BR
        if (browserLang.startsWith('pt')) {
            return 'pt-BR';
        }
        
        // Default to English for other regions
        return 'en';
    }

    init() {
        this.createLanguageSelector();
        this.translatePage();
    }

    createLanguageSelector() {
        const selector = document.getElementById('language-selector');
        if (!selector) return;

        selector.innerHTML = `
            <button class="lang-btn ${this.currentLang === 'pt-BR' ? 'active' : ''}" data-lang="pt-BR">
                PT
            </button>
            <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">
                EN
            </button>
        `;

        selector.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setLanguage(e.target.dataset.lang);
            });
        });
    }

    setLanguage(lang) {
        if (!translations[lang]) return;
        
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        this.translatePage();
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.dataset.i18n;
            const text = this.getTranslation(key);
            if (text) {
                el.textContent = text;
            }
        });
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return null;
            }
        }
        
        return value;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.langManager = new LanguageManager();
});
