import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { API_BASE_URL } from "@/lib/config"

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="font-medium">API Base URL</div>
          <div className="text-sm text-muted-foreground">{API_BASE_URL}</div>
          <Badge variant="secondary" className="mt-2">Server Actions</Badge>
          <div className="text-sm text-muted-foreground mt-1">
            All CRUD operations call the FastAPI backend via server actions.
          </div>
        </div>
        <div>
          <div className="font-medium">Branding</div>
          <div className="text-sm text-muted-foreground">Customize colors and logo in components.</div>
        </div>
      </CardContent>
    </Card>
  )
}
