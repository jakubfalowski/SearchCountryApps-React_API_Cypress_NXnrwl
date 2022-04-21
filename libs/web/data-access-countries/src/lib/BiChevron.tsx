
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface propsName {
    isUp: Boolean;
}
export function BiChevron(props: propsName) {
    return(props.isUp === true ? <BiChevronUp /> : <BiChevronDown />)
  }

  export default BiChevron;