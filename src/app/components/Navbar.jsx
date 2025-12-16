"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const drawer = (
    <div className="w-64 h-full flex flex-col bg-white">
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} onClick={handleDrawerToggle}>
            <Link href={item.href} className="w-full">
              <ListItemText primary={item.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar className="flex justify-between">
          <h1 className="text-xl font-bold">
            <Link href="/">Tuhin.Dev</Link>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button color="inherit">{item.label}</Button>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
