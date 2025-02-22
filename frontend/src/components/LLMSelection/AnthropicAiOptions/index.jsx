export default function AnthropicAiOptions({ settings }) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center gap-[36px] mt-1.5">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            Anthropic API Key
          </label>
          <input
            type="password"
            name="AnthropicApiKey"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder="Anthropic Claude API Key"
            defaultValue={settings?.AnthropicApiKey ? "*".repeat(20) : ""}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        {!settings?.credentialsOnly && (
          <div className="flex flex-col w-60">
            <label className="text-white text-sm font-semibold block mb-3">
              Chat Model Selection
            </label>
            <select
              name="AnthropicModelPref"
              defaultValue={settings?.AnthropicModelPref || "claude-2"}
              required={true}
              className="bg-zinc-900 border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
            >
              {[
                "claude-3-5-sonnet-latest",
                "claude-3-opus-latest",
                "claude-3-5-haiku-20241022",
                "claude-3-5-sonnet-20241022",
              ].map((model) => {
                return (
                  <option key={model} value={model}>
                    {model}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
