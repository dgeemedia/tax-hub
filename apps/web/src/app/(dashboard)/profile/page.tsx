// apps/web/src/app/(dashboard)/profile/page.tsx
import { auth } from "@/lib/auth"  // Changed
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { ProfileForm } from "@/components/forms/ProfileForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function ProfilePage() {
  const session = await auth()  // Changed

  if (!session) {
    redirect("/login")
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      profile: true,
      corporateProfile: true
    }
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account information and tax details
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProfileForm user={user} />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email Verified</span>
                <span className={user?.emailVerified ? "text-green-600" : "text-red-600"}>
                  {user?.emailVerified ? "Yes" : "No"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">NIN Verified</span>
                <span className={user?.nin ? "text-green-600" : "text-yellow-600"}>
                  {user?.nin ? "Yes" : "Pending"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">TIN Verified</span>
                <span className={user?.tin ? "text-green-600" : "text-yellow-600"}>
                  {user?.tin ? "Yes" : "Pending"}
                </span>
              </div>
            </CardContent>
          </Card>

          {user?.userType === "CORPORATE" && (
            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className={user.corporateProfile?.isPaid ? "text-green-600" : "text-red-600"}>
                    {user.corporateProfile?.isPaid ? "Active" : "Inactive"}
                  </span>
                </div>
                {user.corporateProfile?.subscriptionExpiry && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expires</span>
                    <span>
                      {new Date(user.corporateProfile.subscriptionExpiry).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}