declare namespace _default {
    const name: string;
    function data(): {
        primaryMenu: {
            name: string;
            icon: string;
            to: string;
            exact: boolean;
        }[];
        secondaryMenu: {
            name: string;
            icon: string;
            to: string;
        }[];
    };
    namespace methods {
        function toggleMenu(): void;
        function closeMenu(): void;
        function toggleDarkMode(): void;
    }
}
export default _default;
