import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";

export default function Index() {
  return (
    <View className="bg-red-100 justify-center items-center flex-1">
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
    </View>
  );
}
