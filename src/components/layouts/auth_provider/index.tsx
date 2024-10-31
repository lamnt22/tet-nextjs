import { AuthStoreState, useAuthStore } from "@/stores";
import { LayoutProps } from "@/types";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const AuthProviderLayout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const state: AuthStoreState = useAuthStore((state: any) => state);

  useEffect(() => {
    if(state.accessToken && (pathname?.includes("/login") || pathname?.includes("/register"))){
      router.push('/');
    }
  
    if(!state.accessToken && (!pathname?.includes("/login") && !pathname?.includes("/register"))){
      router.push('/login');
    }
    setMounted(true)
  }, [pathname]);
  
  return mounted && children;
};
