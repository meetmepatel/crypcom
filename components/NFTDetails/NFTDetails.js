import { GrTextAlignLeft } from 'react-icons/gr'
import { BsFillBookmarkFill } from 'react-icons/bs'
import Dropdown from './Dropdown'

const style = {
  wrapper: `flex flex-col divide-y rounded-lg overflow-hidden border dark:divide-black dark:border-black`,
  icon: `h-5 w-5 text-gray-600`,
}

const NFTDetails = () => {
  const dropdownData = [
    {
      title: 'Description',
      content: 'By Bored Ape Yacht Club ',
      icon: <GrTextAlignLeft className={style.icon} />,
    },
    {
      title: 'Properties',
      content: `Token Standard : ERC-721 `,               
      icon: <BsFillBookmarkFill className={style.icon} />,
    },
  ]

  return (
    <div className={style.wrapper}>
      {dropdownData.map((item, index) => (
        <Dropdown key={index} title={item.title} content={item.content} icon={item.icon} />
      ))}
    </div>
  )
}

export default NFTDetails