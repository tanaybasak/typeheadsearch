import "./App.css";
import Search from "./components/Search";

function App() {
  const components = [
    {
      id: "1",
      title: "Button",
      description:
        "Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.",
    },
    {
      id: "2",
      title: "Progress Indicator",
      description:
        "Progress indicators inform users about the status of ongoing processes, such as loading a page, downloading or uploading, submitting a form, or updating information. They communicate an app’s state and indicate the extent of progress if available. Progress indicators can be shown with or without any accompanying text.",
    },
    {
      id: "3",
      title: "Search",
      description:
        "Search enables users to specify a word or a phrase to find relevant pieces of content without the use of navigation. Search can be used as the primary means of discovering content, or as a filter to aid the user in finding content.",
    },
    {
      id: "4",
      title: "Overlay",
      description:
        "Overlay panel is a powerful component which is used to build multiple other components (e.g. Overflow menu, search panel, Dropdown, Datepicker etc.) It is basically a tile that floats on top of content and can contain anything. It can open attached to any target element, then either stick to the screen or move with the target on scroll.",
    },
    {
      id: "5",
      title: "Data Table",
      description:
        "A Data Table displays a list of information for the user to view or edit, while maintaining that the data is readable, scannable, and easily comparable. The basic data table is shipped with a base style, which includes borders, multi-select, hover state and sorting.",
    },
    {
      id: "6",
      title: "Checkbox",
      description:
        "Use checkboxes to present a list of options from which the user may select a few, all, or none.",
    },
    {
      id: "7",
      title: "Code Snippet",
      description:
        "The code snippet component allows to view, copy or edit code snippets with color highlighted syntax.",
    },
    {
      id: "8",
      title: "Date Picker",
      description:
        "Date Picker allows users to select a single or a range of dates.",
    },
    {
      id: "9",
      title: "File Uploader",
      description:
        "File Uploader allows the user to transfer a file or submit content of their own.",
    },
  ];
  return (
    <div className="App">
      <Search data={components} className={`col-6`}/>
    </div>
  );
}

export default App;
