import Link from "next/link";
import { Button } from "@/components/ui/button";

const Custom404: React.FC = () => {
  return (
    <div>
      <span>Oops! We couldn&apos;t find that page.</span>
      <span>
        It looks like the page you&apos;re looking for doesn&apos;t exist or has
        been moved.
      </span>
      <span>
        You can try searching for what you need or go back to the homepage.
      </span>
      <Link href="/" passHref>
        <Button color="primary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default Custom404;
