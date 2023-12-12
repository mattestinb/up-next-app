import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function Page() {
  return (
  
    <div>

<div>      <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        
          {/* Add Hero Images Here */}
          <Image
        src="/hero-desktop.png"
        width={560}
        height={620}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>
      </div>


  );
}
