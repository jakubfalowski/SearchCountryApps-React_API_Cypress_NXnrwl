/* eslint-disable-next-line */
export interface HeaderProps {
  api?: string;
  nxname?: string;
}

export function Header(props: HeaderProps) {
  return (
    <div>
      <h1><b>Praktyki Febrit - Jakub Fałowski</b></h1>
      <h3>Projekt przy użyciu: {props.api}</h3>
      <p> Nazwa apki w nxie: {props.nxname}</p>
    </div>
  );
}

export default Header;
