import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlovalStyle = createGlobalStyle`
    ${reset};
    body {
        overflow: hidden;
    }
`;
export default GlovalStyle;
