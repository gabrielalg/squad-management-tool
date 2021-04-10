import Button from "../elements/Button.js";

const Nav = () => {
  return <>
    <nav>
      <ul className="flex-row">
        <li>
          <Button route="/como-funciona" title="Como Funciona?" type="clear"/>
        </li>
        <li>
          <Button route="/servicos" title="Serviços" type="clear"/>
        </li>
        <li>
          <Button route="/precos" title="Preços" type="clear"/>
        </li>
        <li>
          <Button route="/agendar-casa" title="Agende" type="clear"/>
        </li>
        <li>
          <Button route="/login" title="Login" type="outline" />
        </li>
      </ul>
    </nav>
  </>;
}

export default Nav;