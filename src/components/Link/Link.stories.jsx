import Link from './Link';

const config = {
    title: 'component/Link'
}

export default config;

const Default = () => <Link url="/test">Click me!</Link>;
const Full = () => <Link url="/test" fullWidth>Click me!</Link>;

const Disabled = () => <Link disabled url="/test">Click me!</Link>;

export{Default, Full, Disabled};