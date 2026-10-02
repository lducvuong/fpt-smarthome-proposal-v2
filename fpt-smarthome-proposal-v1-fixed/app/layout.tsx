import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Giải pháp Smart Home | Anh Mạnh · STC CROP',
  description: 'Hồ sơ giải pháp FPT Smart Home tương tác',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
