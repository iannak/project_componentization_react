import ButtonLarge from "./components/Atoms/Buttons/ButtonLarge/ButtonLarge";
import SelectsRequired from "./components/Atoms/Selects/SelectsRequired/SelectsRequired";
import SwitchBasic from "./components/Atoms/Switch/Switch";
import ToastAlert from "./components/Atoms/Toast/Toast";

export default function Home() {
  return (
    <main>
      <div>
        <ButtonLarge />
      </div>
      <div>
        <ToastAlert />
      </div>
      <div>
        <SelectsRequired
          value="1"
          label="no selection ..."
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" },
          ]}
        />
      </div>
      <div>
        <SwitchBasic />
      </div>
    </main>
  );
}
