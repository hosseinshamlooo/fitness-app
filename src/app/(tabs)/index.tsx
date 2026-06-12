import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-red-500 text-white p-4"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-blue-600 text-white p-4"
      >
        Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-blue-600 text-white p-4"
      >
        Sign Up
      </Link>
      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscriptions
      </Link>
    </SafeAreaView>
  );
}
