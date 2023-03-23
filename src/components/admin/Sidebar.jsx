import React from "react";
import { PanelMenu } from "primereact/panelmenu";

export default function Sidebar() {
  const items = [
    {
      label: "Images",
      icon: "pi pi-fw pi-file",
    },

    {
      label: "Tags",
      icon: "pi pi-fw pi-tag",
    },

    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },

    {
      label: "Logout",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  return (
    <div className="sidebar card flex flex-col h-screen items-center w-72">
      <h2 className="text-2xl m-6">Admin Dashboard</h2>
      <PanelMenu model={items} className="w-full" />
    </div>
  );
}
