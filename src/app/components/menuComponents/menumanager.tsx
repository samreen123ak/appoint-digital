// "use client";
// import React, { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import Dropdown from "./menuDropDown";
// import ServicesDropdown from "./serviceDropDown";
// import ResourcesDropdown from "./resourcesDropDown";
// import IndustriesDropdown from "./industriesDropDown";
// import WhoWeAreDropDown from "./whoWeAre";

// type MenuType =
//   | "main"
//   | "services"
//   | "resources"
//   | "industries"
//   | "whoweare"
//   | null;

// export default function MenuManager() {
//   const [menuType, setMenuType] = useState<MenuType>(null);

//   const openMain = () => setMenuType("main");
//   const closeAll = () => setMenuType(null);

//   return (
//     <>
//       {menuType === "main" && (
//         <Dropdown
//           isOpen={true}
//           onClose={closeAll}
//           onServicesClick={() => setMenuType("services")}
//           onResourcesClick={() => setMenuType("resources")}
//           onIndustriesClick={() => setMenuType("industries")}
//           onWhowereClick={() => setMenuType("whoweare")}
//         />
//       )}

//       {menuType === "services" && (
//         <ServicesDropdown isOpen={true} onClose={() => setMenuType("main")} />
//       )}

//       {menuType === "resources" && (
//         <ResourcesDropdown isOpen={true} onClose={() => setMenuType("main")} />
//       )}

//       {menuType === "industries" && (
//         <IndustriesDropdown isOpen={true} onClose={() => setMenuType("main")} />
//       )}

//       {menuType === "whoweare" && (
//         <WhoWeAreDropDown isOpen={true} onClose={() => setMenuType("main")} />
//       )}

//       <button onClick={openMain}>
//         <IoMdMenu className="text-primary h-7 w-7 " />
//       </button>
//     </>
//   );
// }
"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Dropdown from "./menuDropDown";
import ServicesDropdown from "./serviceDropDown";
import ResourcesDropdown from "./resourcesDropDown";
import IndustriesDropdown from "./industriesDropDown";
import WhoWeAreDropDown from "./whoWeAre";

type MenuType =
  | "main"
  | "services"
  | "resources"
  | "industries"
  | "whoweare"
  | null;

export default function MenuManager() {
  const [menuType, setMenuType] = useState<MenuType>(null);

  const openMain = () => setMenuType("main");
  const closeAll = () => setMenuType(null);

  return (
    <>
      {menuType === "main" && (
        <Dropdown
          isOpen={true}
          onClose={closeAll}
          onServicesClick={() => setMenuType("services")}
          onResourcesClick={() => setMenuType("resources")}
          onIndustriesClick={() => setMenuType("industries")}
          onWhowereClick={() => setMenuType("whoweare")}
        />
      )}

      {menuType === "services" && (
        <ServicesDropdown isOpen={true} onClose={() => setMenuType("main")} />
      )}

      {menuType === "resources" && (
        <ResourcesDropdown isOpen={true} onClose={() => setMenuType("main")} />
      )}

      {menuType === "industries" && (
        <IndustriesDropdown isOpen={true} onClose={() => setMenuType("main")} />
      )}

      {menuType === "whoweare" && (
        <WhoWeAreDropDown isOpen={true} onClose={() => setMenuType("main")} />
      )}

      {/* Styled Menu Button */}
      <button
        onClick={openMain}
        className="p-2 rounded-full bg-black hover:bg-primary/20 transition-colors cursor-pointer"
      >
        <IoMdMenu className="text-primary h-7 w-7" />
      </button>
    </>
  );
}
