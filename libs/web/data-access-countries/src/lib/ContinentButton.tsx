export function ContinentButton(props: any) {
  return (
    <span className={props.continentCode} data-testid="button">
      <a href={props.continentCode}>
        {props.continentCode} - {props.continent}{' '}
      </a>
    </span>
  );
}

export default ContinentButton;
