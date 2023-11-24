'use client'

const PDFButton = () => {
  const downloadPdf = async () => {
    window.open('/CV Patrik Hellberg 2023.pdf')
  }

  return (
    <button onClick={downloadPdf} className='underline'>
      Download as PDF
    </button>
  )
}

export default PDFButton
