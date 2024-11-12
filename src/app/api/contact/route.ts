import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import * as nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Connecter à la base de données
    await dbConnect();

    // Créer un nouveau contact
    const contact = await Contact.create(body);

    // Configurer le transporteur d'email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    // Préparer l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // votre adresse email
      subject: 'Nouvelle requête de contact',
      html: `
        <h2>Nouvelle requête de contact reçue</h2>
        <p><strong>Nom:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Téléphone:</strong> ${body.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, data: contact }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Error processing request' },
      { status: 500 }
    );
  }
}