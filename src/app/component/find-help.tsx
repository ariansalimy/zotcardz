import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function FindHelp() {
  return (
    <div className=" inline group">
      <HelpOutlineIcon />
      <p className="absolute font-normal text-sm left-1/3 text-blue-dark bg-white rounded-md px-3 py-1 hidden group-hover:block">
        Drag an event card to the “Events to Save” area and press the button to
        save it!
      </p>
    </div>
  );
}
