type Props = {
  id: string
  text: string
  classes?: string
}

const AnchorHeader = ({ id, text, classes }: Props) => {
  return (
    <>
      <div id={id} className='relative -top-20'></div>
      <h1 className={classes ? classes : ''}>{text}</h1>
    </>
  )
}

export default AnchorHeader
