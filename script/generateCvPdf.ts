import { runScript } from '@naturalcycles/nodejs-lib/runScript'
import PDFKit from 'pdfkit'
import { experiences, education, contactItems } from '../src/utils/cvData.js'
import { dateString } from '../src/utils/date.js'

/**
  pnpm generate-cv-pdf
 */

runScript(() => {
  createPdf()
})

function createPdf(): void {
  const filteredContactItems = contactItems.filter(
    (item) => item.text !== 'Source'
  )

  const doc = new PDFKit()
  doc.image('./public/portrait-tall.jpeg', {
    fit: [200, 200],
  })
  doc.moveUp(10.8)
  doc.font('Helvetica-Bold').fontSize(22).text('CV - Patrik Hellberg', 230)
  doc.moveDown(0.5)
  doc.font('Helvetica').fontSize(18).text('Contact information')
  doc.moveDown(0.3)
  filteredContactItems.forEach((item) => {
    doc.fontSize(12).text(item.text, {
      link: item.link,
      underline: true,
    })
    doc.moveDown(0.3)
  })
  doc.fontSize(12).text('hellberg.io', {
    link: 'https://hellberg.io',
    underline: true,
  })
  doc.moveDown(0.3)
  doc.moveDown(2)
  doc.x = doc.page.margins.left
  doc
    .font('Helvetica')
    .fontSize(18)
    .text('Experience ', { continued: true, baseline: -1 })
    .fontSize(12)
    .font('Helvetica')
    .text('(References provided on request)')
  doc.moveDown(0.3)
  experiences.forEach((exp) => {
    doc
      .fontSize(14)
      .text(
        `${exp.title} - ${exp.company}, ${dateString(exp.start)} - ${dateString(
          exp.end
        )}`
      )
    doc.moveDown(0.3)
    doc.fontSize(12).text(exp.description)
    doc.moveDown(0.3)
    doc
      .font('Helvetica-Bold')
      .text('Skills used: ', { continued: true })
      .font('Helvetica')
      .text(exp.skills.join(', '))
    doc.moveDown(1.5)
  })
  doc.moveDown(0.3)
  doc
    .font('Helvetica')
    .fontSize(18)
    .text('Education ', { continued: true, baseline: -1 })
    .fontSize(12)
    .font('Helvetica')
    .text('(Certification provided on request)')
  education.forEach((exp) => {
    doc.fontSize(12).text(`${exp.title}, ${exp.institution} - ${exp.year}`)
    doc.moveDown(0.3)
  })
  doc.end()
}
