import PresencePostale from "../../components/support/presence-postale";
import FAQ from "../../components/support/faq";
import AIChatbot from "../../components/support/ai-chatbot";

export default function SupportPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <PresencePostale />
          <FAQ />
        </div>
        <AIChatbot />
      </div>
    </div>
  );
}
