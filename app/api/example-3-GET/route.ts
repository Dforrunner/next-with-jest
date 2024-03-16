import { NextRequest, NextResponse } from 'next/server';

const items = [
   { id: 1, name: 'Item 1' },
   { id: 2, name: 'Item 2' },
];
 
export async function GET(req: NextRequest) {
  const itemId =  req.nextUrl.searchParams.get('Id');

  if (!itemId) {
    return NextResponse.json({ error: 'Item Id is required' }, { status: 400 });
  }

  const item = items.find((item) => item.id === parseInt(itemId));

  if (!item) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
  }

  return NextResponse.json(item, { status: 200 });
}
