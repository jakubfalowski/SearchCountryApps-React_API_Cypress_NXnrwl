
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface iconType {
    isUp: boolean;
}
export function BiChevron(props: iconType) {
    return(props.isUp === true ? <BiChevronUp /> : <BiChevronDown />)
  }

  export default BiChevron;