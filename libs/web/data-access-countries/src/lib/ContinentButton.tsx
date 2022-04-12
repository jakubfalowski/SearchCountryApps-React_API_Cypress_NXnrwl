export function ContinentButton(props: any) {
  return (
    <span className={props.continentCode}>
      <a href={props.continentCode}>
        {props.continentCode} - {props.continent}{' '}
      </a>
    </span>
  );
}

export default ContinentButton;
