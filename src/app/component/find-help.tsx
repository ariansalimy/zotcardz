import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

type FindHelpProps = {
  text: string
}

export default function FindHelp({text}: FindHelpProps) {
  return (
    <div className=" inline group">
      <HelpOutlineIcon />
      <p className="absolute font-normal text-sm left-1/3 text-blue-dark bg-white rounded-md px-3 py-1 hidden group-hover:block">
        {text}
      </p>
    </div>
  );
}
