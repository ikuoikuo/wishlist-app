import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            🎉 Cloudflare Pages デプロイ成功！
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Next.js アプリケーションが正常にデプロイされました
            </p>
            
            <div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-4">
              <p className="font-semibold">✅ デプロイ状態: 正常</p>
            </div>
            
            <div className="text-left space-y-2 text-gray-600 dark:text-gray-400">
              <p>📅 デプロイ日時: {new Date().toLocaleString('ja-JP')}</p>
              <p>🚀 Next.js バージョン: 14.x</p>
              <p>📦 Node.js バージョン: 22.x</p>
              <p>☁️ ホスティング: Cloudflare Pages</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              デプロイ確認手順
            </h2>
            <ol className="text-left space-y-3 text-gray-600 dark:text-gray-300">
              <li>1. このページが表示されていることを確認 ✅</li>
              <li>2. GitHubにプッシュ後、自動デプロイが動作することを確認</li>
              <li>3. Cloudflare Dashboardでビルドログを確認</li>
              <li>4. カスタムドメインを設定（オプション）</li>
            </ol>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              変更をテスト: このテキストを編集してGitHubにプッシュしてみてください
            </p>
            
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                GitHub
              </a>
              <a
                href="https://dash.cloudflare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
              >
                Cloudflare Dashboard
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}