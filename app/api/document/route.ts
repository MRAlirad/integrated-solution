import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/prisma/client';

const createIssueSchema = z.object({
	subject: z.string().min(1).max(255),
	description: z.string().min(1),
	sender: z.string().min(1).max(255),
	receiver: z.string().min(1).max(255),
});

export async function POST(request: NextRequest) {
	const body = await request.json();

	const validation = createIssueSchema.safeParse(body);

	if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

	const { subject, description, sender, receiver } = body;

	const newDocument = await prisma.document.create({
		data: { subject, description, sender, receiver },
	});

	return NextResponse.json(newDocument, { status: 201 });
}
