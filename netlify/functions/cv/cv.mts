import PDFKit from 'pdfkit'
import type { Handler } from '@netlify/functions'
import {
  experiences,
  education,
  dateString,
} from '../../../src/components/CVSection'
import { contactItems } from '../../../src/components/ContactSection'

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'GET')
    return {
      body: 'Invalid method',
      statusCode: 405,
    }
  try {
    const createPdf = (): Promise<string> => {
      return new Promise((resolve) => {
        const doc = new PDFKit()
        doc.image('./public/portrait-tall.jpeg', {
          fit: [200, 200],
        })
        doc.moveUp(8.5)
        doc
          .font('Helvetica-Bold')
          .fontSize(22)
          .text('CV - Patrik Hellberg', 230)
        doc.moveDown(0.5)
        doc.font('Helvetica').fontSize(18).text('Contact information')
        doc.moveDown(0.3)
        contactItems.forEach((item) => {
          doc.fontSize(12).text(item.text, {
            link: item.link,
            underline: true,
          })
          doc.moveDown(0.3)
        })
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
              `${exp.title} - ${exp.company}, ${dateString(
                exp.start
              )} - ${dateString(exp.end)}`
            )
          doc.moveDown(0.3)
          doc.fontSize(12).text(exp.description)
          doc.moveDown(0.3)
          doc
            .font('Helvetica-Bold')
            .text('Technologies used: ', { continued: true })
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
          doc
            .fontSize(12)
            .text(`${exp.title}, ${exp.institution} - ${exp.year}`)
          doc.moveDown(0.3)
        })
        doc.end()
        const buffers = []
        doc.on('data', buffers.push.bind(buffers))
        doc.on('end', () => {
          const pdf = Buffer.concat(buffers)
          resolve(pdf.toString('base64'))
        })
      })
    }
    const pdfString = await createPdf()
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment;filename=CV Patrik Hellberg ${new Date().getFullYear()}.pdf`,
      },
      body: pdfString,
      isBase64Encoded: true,
    }
  } catch (e) {
    console.error(e)
    return {
      body: 'Could not generate pdf',
      statusCode: 500,
    }
  }
}
