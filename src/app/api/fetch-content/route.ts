import { NextRequest, NextResponse } from 'next/server';
import { FetchClient, Config } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const config = new Config();
    const client = new FetchClient(config);

    const response = await client.fetch(url);

    if (response.status_code !== 0) {
      return NextResponse.json(
        { error: response.status_message || 'Failed to fetch content' },
        { status: 500 }
      );
    }

    // 提取所有文本内容
    const textContent = response.content
      .filter(item => item.type === 'text')
      .map(item => item.text)
      .join('\n');

    return NextResponse.json({
      success: true,
      title: response.title,
      content: textContent,
      url: response.url,
      filetype: response.filetype,
      items: response.content
    });
  } catch (error) {
    console.error('Error fetching URL:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
