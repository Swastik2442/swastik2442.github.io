import Link from "next/link";
import { tertiaryFont } from "@/config";

export default function NotFound() {
  return (
    <body className={`mainBody ${tertiaryFont.className}`}>
      <div className="textScar centerAll noUserSelect">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <h4>
          <Link href="/" replace={true} prefetch={true}>
            Return Home
          </Link>
        </h4>
      </div>
    </body>
  )
}
