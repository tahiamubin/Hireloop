"use client";

import React, { useState } from "react";
import { Person, Briefcase, ChevronLeft, ChevronRight } from "@gravity-ui/icons";
import { updateUsersRole } from "@/lib/actions/users";

export default function AdminUsersTable({ users }) {
  const [confirm, setConfirm] = useState(null); // { userId, userName, newRole } — null = modal closed
  const [loading, setLoading] = useState(false);

  const formatDate = (dateObj) => {
    if (!dateObj?.$date) return "N/A";
    return new Date(dateObj.$date).toLocaleDateString("en-US", {
      month: "short", day: "2-digit", year: "numeric",
    });
  };

  const getUserId = (user) => user._id?.$oid || user.id;

  const handleRoleChange = async () => {
    setLoading(true);
    try {
      await updateUsersRole(confirm.userId, confirm.newRole);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setConfirm(null);
    }

    //const data = await updateUsersRole(confirm.userId, confirm.role)
  };

  return (
    <div className="relative w-full">
      <div className="w-full bg-[#1e1e1e] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl font-sans">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-zinc-400">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 font-medium select-none">
                <th className="py-5 px-6 font-normal">User Name</th>
                <th className="py-5 px-6 font-normal">Email Address</th>
                <th className="py-5 px-6 font-normal">Role</th>
                <th className="py-5 px-6 font-normal">Join Date</th>
                <th className="py-5 px-6 font-normal">Status</th>
                <th className="py-5 px-6 font-normal text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800/60 bg-[#1e1e1e]">
              {users.map((user) => {
                const userId = getUserId(user);
                const userRole = user.role?.toLowerCase() || "seeker";
                const userStatus = user.status || "Active";

                return (
                  <tr key={userId} className="hover:bg-zinc-900/40 transition-colors duration-150">
                    <td className="py-4 px-6 font-medium text-zinc-200 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-700/60 flex items-center justify-center text-xs text-zinc-300 font-bold tracking-wider">
                          {user.name?.split(" ").map((n) => n[0]).join("").toUpperCase() || "U"}
                        </div>
                        <span>{user.name || "Unknown User"}</span>
                      </div>
                    </td>

                    <td className="py-4 px-6 text-zinc-400 whitespace-nowrap">{user.email}</td>

                    <td className="py-4 px-6 whitespace-nowrap">
                      {userRole === "recruiter" ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 text-zinc-900 shadow-sm">
                          <Briefcase width={12} height={12} /> Recruiter
                        </span>
                      ) : userRole === "admin" ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-purple-950/40 text-purple-300 border border-purple-800/50">
                          Admin
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                          <Person width={12} height={12} /> Seeker
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-6 text-zinc-400 whitespace-nowrap">{formatDate(user.createdAt)}</td>

                    <td className="py-4 px-6 whitespace-nowrap">
                      {userStatus === "Active" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-950/30 text-emerald-400 border border-emerald-900/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full bg-red-950/30 text-red-400 border border-red-900/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Suspended
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-6 text-right whitespace-nowrap text-xs font-medium">
                      <div className="flex items-center justify-end gap-4">
                        {userRole !== "admin" && (
                          <button onClick={() => setConfirm({ userId, userName: user.name, newRole: "admin" })} className="text-zinc-400 hover:text-white transition-colors">
                            Make Admin
                          </button>
                        )}
                        {userRole !== "recruiter" && (
                          <button onClick={() => setConfirm({ userId, userName: user.name, newRole: "recruiter" })} className="text-zinc-400 hover:text-white transition-colors">
                            Make Recruiter
                          </button>
                        )}
                        {userRole !== "seeker" && (
                          <button onClick={() => setConfirm({ userId, userName: user.name, newRole: "seeker" })} className="text-zinc-400 hover:text-white transition-colors">
                            Make Seeker
                          </button>
                        )}
                        {userStatus === "Active" ? (
                          <button className="text-red-500 hover:text-red-400 transition-colors pl-2 border-l border-zinc-800">
                            Suspend
                          </button>
                        ) : (
                          <>
                            <button className="text-emerald-500 hover:text-emerald-400 transition-colors pl-2 border-l border-zinc-800">
                              Activate
                            </button>
                            <button className="text-zinc-400 hover:text-red-400 transition-colors">
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800 text-xs text-zinc-500 select-none">
          <div>Showing 1 to {users.length} of 12,842 users</div>
          <div className="flex items-center gap-1">
            <button className="p-1 hover:text-zinc-300"><ChevronLeft width={16} height={16} /></button>
            <button className="w-6 h-6 flex items-center justify-center bg-white text-zinc-900 rounded font-medium">1</button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-zinc-800/60 rounded text-zinc-400">2</button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-zinc-800/60 rounded text-zinc-400">3</button>
            <span className="px-1 text-zinc-600">...</span>
            <button className="px-1.5 h-6 flex items-center justify-center hover:bg-zinc-800/60 rounded text-zinc-400">1285</button>
            <button className="p-1 hover:text-zinc-300"><ChevronRight width={16} height={16} /></button>
          </div>
        </div>
      </div>

      {/* Modal — only renders when confirm is not null */}
      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/60">
          <div className="w-full max-w-sm bg-[#1e1e1e] border border-zinc-800 rounded-xl p-6 shadow-2xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-zinc-100">Confirm Role Change</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Change <span className="text-zinc-200 font-medium">{confirm.userName}</span>'s role to{" "}
                <span className="text-zinc-200 font-medium capitalize">{confirm.newRole}</span>?
                This updates their access immediately.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 text-xs font-medium">
              <button
                disabled={loading}
                onClick={() => setConfirm(null)}
                className="px-4 py-2 text-zinc-400 hover:text-zinc-200 bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                disabled={loading}
                onClick={handleRoleChange}
                className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors disabled:opacity-50 min-w-[76px] flex items-center justify-center"
              >
                {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}