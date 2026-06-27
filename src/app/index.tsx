import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth({
    treatPendingAsSignedOut: false,
  });

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href="../(home)/" />;
  }

  return <Redirect href="../(auth)/sign-in" />;
}
