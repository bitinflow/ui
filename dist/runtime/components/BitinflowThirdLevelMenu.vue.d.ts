declare namespace _default {
    const name: string;
    namespace components {
        export { BitinflowButton };
    }
    function data(): {
        link: string;
    };
    namespace computed {
        const thirdLevelLinks: () => {
            name: string;
            icon: string;
            to: string;
        }[];
    }
    namespace methods {
        function onChange(event: any): void;
    }
}
export default _default;
