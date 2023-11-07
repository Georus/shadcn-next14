import clsx from "clsx";
import Link from "next/link";

const Footer = () => {
  const data = [
    ["HOME", "Lorem im", "Hello"],
    ["ABOUT", "Lorem im", "Hello"],
    ["AUTOMATION", "Lorem im", "Hello"],
    ["INDUSTRIES", "Lorem im", "Hello"],
    ["BLOG", "Lorem im", "Hello"],
    ["CAREER", "Lorem im", "Hello"],
    ["VIDEOS", "Lorem im", "Hello"],
  ];
  return (
    <div className="container mt-3 py-2">
      <ul className="md:flex md:justify-between">
        {data.map((col, i) => (
          <li key={i}>
            <ul>
              {col.map((el, i) => (
                <li
                  className={clsx(
                    { "font-bold": i === 0 },
                    { "hidden md:list-item": i !== 0 },
                  )}
                  key={i}
                >
                  <Link className="hover:underline" href="/">
                    {el}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
