import {
  Avatar,
  Button,
  ButtonProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Input,
  Link,
  Listbox,
  ListboxItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spinner,
} from "@nextui-org/react";
import { BUTTON_ITEMS, NAV_ITEMS } from "../LandingPageLayout.constants";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";
import { signOut, useSession } from "next-auth/react";
import useLandingPageLayoutNavbar from "./useLandingPageLayoutNavbar";
import { Fragment } from "react";
import { IEvent } from "@/types/Event";

const LandingPageLayoutNavbar = () => {
  const router = useRouter();
  const session = useSession();
  const {
    dataProfile,

    handleSearch,
    dataEventSearch,
    isLoadingEventSearch,
    isRefetchingEventSearch,
    search,
    setSearch,
  } = useLandingPageLayoutNavbar();
  return (
    <Navbar maxWidth="full" isBordered isBlurred={false} shouldHideOnScroll>
      <div className="flex items-center gap-8">
        <NavbarBrand as={Link} href="/">
          <Image
            src="/images/general/logo.svg"
            alt="logo"
            width={100}
            height={50}
            className="cursor-pointer"
          />
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex">
          {NAV_ITEMS.map((item, index) => (
            <NavbarItem
              key={`nav-${item.label}-${index}`}
              as={Link}
              href={item.href}
              className={cn("font-medium text-default-700 hover:text-danger", {
                "font-bold text-danger-500": router.pathname === item.href,
              })}
            >
              {item.label}
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>
      <NavbarContent justify="end">
        <NavbarMenuToggle className="lg:hidden" />
        <NavbarItem className="hidden lg:relative lg:flex">
          <Input
            isClearable
            className="w-[300px]"
            placeholder="Search"
            startContent={<CiSearch />}
            onClear={() => setSearch("")}
            onChange={handleSearch}
          />
          {search !== "" && (
            <Listbox
              items={dataEventSearch?.data || []}
              className="absolute right-0 top-12 rounded-xl border bg-white"
            >
              {!isRefetchingEventSearch && !isLoadingEventSearch ? (
                (item: IEvent) => (
                  <ListboxItem key={item._id} href={`/event/${item.slug}`}>
                    <div className="flex items-center gap-2">
                      <Image
                        src={`${item.banner}`}
                        alt={`${item.name}`}
                        className="w-2/5 rounded-md"
                        width={100}
                        height={40}
                      />
                      <p className="line-clamp-2 w-3/5 text-wrap">
                        {item.name}
                      </p>
                    </div>
                  </ListboxItem>
                )
              ) : (
                <ListboxItem key="loading">
                  <Spinner color="danger" size="sm" />
                </ListboxItem>
              )}
            </Listbox>
          )}
        </NavbarItem>
        {session.status === "authenticated" ? (
          <NavbarItem className="hidden lg:block">
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  src={dataProfile?.profilePicture}
                  className="cursor-pointer"
                  showFallback
                  name={dataProfile?.name}
                />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  key="admin"
                  href="/admin/dashboard"
                  className={cn({ hidden: dataProfile?.role !== "admin" })}
                >
                  Admin
                </DropdownItem>
                <DropdownItem key="profile" href="/member/profile">
                  Profile
                </DropdownItem>
                <DropdownItem key="signout" onPress={() => signOut()}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        ) : (
          <div className="hidden lg:flex lg:gap-4">
            {BUTTON_ITEMS.map((button, index) => (
              <NavbarItem key={`button-${button.label}-${index}`}>
                <Button
                  as={Link}
                  color="danger"
                  href={button.href}
                  variant={button.variant as ButtonProps["variant"]}
                >
                  {button.label}
                </Button>
              </NavbarItem>
            ))}
          </div>
        )}
        <NavbarMenu className="gap-4">
          {NAV_ITEMS.map((item, index) => (
            <NavbarMenuItem key={`nav-${item.label}-${index}`}>
              <Link
                href={item.href}
                className={cn(
                  "font-medium text-default-700 hover:text-danger",
                  {
                    "font-bold text-danger-500": router.pathname === item.href,
                  },
                )}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {session.status === "authenticated" ? (
            <Fragment>
              <NavbarMenuItem
                className={cn(
                  "font-medium text-default-700 hover:text-danger",
                  { hidden: dataProfile?.role !== "admin" },
                )}
              >
                <Link
                  href={"/admin/dashboard"}
                  className="font-medium text-default-700 hover:text-danger"
                >
                  Admin
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem
                className={cn("font-medium text-default-700 hover:text-danger")}
              >
                <Link
                  href={"/profile"}
                  className="font-medium text-default-700 hover:text-danger"
                >
                  Profile
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Button
                  color="danger"
                  onPress={() => signOut()}
                  className="mt-2 w-full"
                  variant="bordered"
                  size="md"
                >
                  Log out
                </Button>
              </NavbarMenuItem>
            </Fragment>
          ) : (
            <Fragment>
              {BUTTON_ITEMS.map((button, index) => (
                <NavbarMenuItem key={`button-${button.label}-${index}`}>
                  <Button
                    color="danger"
                    variant={button.variant as ButtonProps["variant"]}
                    className="w-full"
                    size="md"
                  >
                    <Link href={button.href}>{button.label}</Link>
                  </Button>
                </NavbarMenuItem>
              ))}
            </Fragment>
          )}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
};

export default LandingPageLayoutNavbar;
