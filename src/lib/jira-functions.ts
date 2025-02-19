import axios from 'axios';
import FormData from "form-data";

export const JgetManyIssuesF = async () => {
  try {
    const response = await axios.get("/api/jira/issue/getManyIssues", {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    if (data.issues && data.issues.length > 0) {
      const issues = data.issues.map((issue: {
        key: string;
        fields: {
          summary: string;
          issuetype: { name: string };
          description: { content: Array<{ content: Array<{ text: string }> }> };
        };
      }) => ({
        key: issue.key,
        summary: issue.fields.summary,
        issueType: issue.fields.issuetype.name,
        description: extractDescriptionText(issue.fields.description),
      }));
      console.log("Jira issues:", issues)
      return issues;
    }
    return "No issues found.";
  } catch (error) {
    console.error("Error fetching Jira issues:", error);
    throw error;
  }
};

const extractDescriptionText = (description: { content: Array<{ content: Array<{ text: string }> }> }) => {
  if (description && description.content) {
    return description.content
      .map((paragraph) =>
        paragraph.content
          .map((textBlock: { text: string }) => textBlock.text)
          .join(" ")
      )
      .join("\n");
  }
  return "No description available.";
};

export const JgetIssueF = async (issueKey: string) => {
  try {
    const response = await axios.get(`/api/jira/issue/getIssue/${issueKey}`, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    if (data.success && data.data) {
      const issue = {
        key: data.data.key,
        summary: data.data.fields.summary,
        description: data.data.fields.description,
        issueType: data.data.fields.issuetype.name,
      };
      console.log("Jira issue:", issue);
      return issue;
    }

    return "No issue found.";
  } catch (error) {
    console.error("Error fetching Jira issue:", error);
    throw error;
  }
};

export const JcreateIssueF = async (issueData: {
  summary: string;
  description: string;
  issueType?: string
}) => {
  try {
    const { summary, description, issueType = "Task" } = issueData;

    const response = await axios.post(
      "/api/jira/issue/createIssue",
      { summary, description, issueType },
      { headers: { "Content-Type": "application/json" } }
    );

    const data = response.data;
    console.log("Jira Issue Created:", data);
    return data;
  } catch (error) {
    console.error("Error creating Jira issue:", error);
    throw error;
  }
};

export const JdeleteIssueF = async (issueKey: string) => {
  try {
    const response = await axios.delete('/api/jira/issue/deleteIssue', {
      data: { issueKey }
    });

    console.log('Issue deleted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting issue:', error);
    throw error;
  }
};

export const JupdateIssueF = async (issueKey: string, summary: string, description: string, issueType: string = 'Task') => {
  try {
    const response = await axios.put('/api/jira/issue/updateIssue', {
      issueKey,
      summary,
      description,
      issueType,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.data;

    if (data.success) {
      console.log('Issue updated successfully:', data.data);
    } else {
      console.error('Error updating issue:', data.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export const JgetIssueStatusF = async (issueKey: string) => {
  try {
    const response = await axios.get(`/api/jira/issue/getIssueStatus/${issueKey}`);
    if (response.data.success) {
      console.log(`Issue status: ${response.data.status}`);
      return response.data.status;
    }
  } catch (error) {
    console.error("Error fetching issue status:", error);
  }
};  

export const JgetIssueChangelogF = async (issueKey: string) => {
  try {
    const response = await axios.get(`/api/jira/issue/getIssueChangelog/${issueKey}`);
    if (response.data.success) {
      console.log("Issue Changelog:", response.data.changelog);
      return response.data.changelog;
    }
  } catch (error) {
    console.error("Error fetching issue changelog:", error);
  }
};  

export const JcreateEmailNotificationF = async (issueKey: string, emailAddress: string, subject: string, message: string) => {
    try {
      const response = await axios.post("/api/jira/issue/sendEmailNotification", {
        issueKey,
        emailAddress,
        subject,
        message,
      }, {
        headers: { "Content-Type": "application/json" },
      });
  
      const data = response.data;
      if (data.success) {
        console.log(`Email notification sent: ${data.message}`);
        return data.message;
      }
  
      return "Failed to send email notification";
    } catch (error) {
      console.error("Error sending email notification:", error);
      throw error;
    }
  };
  
export const JaddAttachmentF = async (issueKey: string, file: File) => {
  try {
    if (!issueKey || !file) {
      throw new Error("Issue key and file are required.");
    }

    const formData = new FormData();
    formData.append("issueKey", issueKey);
    formData.append("file", file);

    const response = await axios.post("/api/jira/attachment/addAttachment", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = response.data;
    if (data.success) {
      console.log("File uploaded successfully:", data);
      return data;
    }

    throw new Error("Failed to upload file.");
  } catch (error) {
    console.error("Error uploading Jira attachment:", error);
    throw error;
  }
};

export const JgetAttachmentF = async (issueKey: string) => {
  try {
    const response = await axios.get(`/api/jira/attachment/getAttachment/${issueKey}`, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    if (data.success && data.attachments) {
      const attachments = data.attachments.map((attachment: any) => ({
        id: attachment.id,
        filename: attachment.filename,
        mimeType: attachment.mimeType,
        contentUrl: attachment.content, 
      }));

      console.log("Jira attachments:", attachments);
      return attachments;
    }

    return "No attachments found.";
  } catch (error) {
    console.error("Error fetching Jira attachments:", error);
    throw error;
  }
};

export const JgetManyAttachmentsF = async (issueKeys: string) => {
  try {
    const response = await axios.get(`/api/jira/attachment/getManyAttachments/${issueKeys}`, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    if (data.success && data.attachments) {
      const formattedAttachments = data.attachments.map((issue: any) => ({
        issueKey: issue.issueKey,
        attachments: issue.attachments.map((attachment: any) => ({
          id: attachment.id,
          filename: attachment.filename,
          mimeType: attachment.mimeType,
          contentUrl: attachment.content,
        })),
      }));

      console.log("Jira issue attachments:", formattedAttachments);
      return formattedAttachments;
    }

    return "No attachments found.";
  } catch (error) {
    console.error("Error fetching Jira attachments:", error);
    throw error;
  }
};

export const JremoveAttachmentF = async (attachmentId: string) => {
  try {
    const response = await axios.delete("/api/jira/attachment/removeAttachment", {
      data: { attachmentId },
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    if (data.success) {
      console.log("Attachment removed successfully");
      return data.message;
    }

    return "Failed to remove attachment.";
  } catch (error) {
    console.error("Error removing Jira attachment:", error);
    throw error;
  }
};

export const JaddCommentF = async (issueKey: string, comment: string) => {
  try {
    const response = await axios.post("/api/jira/comment/addComment", {
      issueKey,
      comment
    },
      { headers: { "Content-Type": "application/json" } }
    );
    const data = response.data;
    if (data.success) {
      console.log("Comment added successfully");
      return data.message;
    }
    return "Failed to add comment.";
  } catch (error) {
    console.error("Error adding Jira comment:", error);
    throw error;
  }
};

export const JgetCommentF = async (issueKey: string) => {
  try {
    const response = await axios.get(`/api/jira/comment/getComment/${issueKey}`, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    if (data.success && data.comments) {
      const comments = data.comments.map((comment: any) => ({
        id: comment.id,
        author: comment.author.displayName,
        body: comment.body,
        created: comment.created,
      }));

      console.log("Jira comments:", comments);
      return comments;
    }

    return "No comments found.";
  } catch (error) {
    console.error("Error fetching Jira comments:", error);
    throw error;
  }
};

export const JgetManyCommentsF = async (issueKeys: string) => {
  try {
    const response = await axios.get(`/api/jira/comment/getManyComments/${issueKeys}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = response.data;

    if (data.success && data.comments) {
      const formattedComments = data.comments.map((issue: any) => ({
        issueKey: issue.issueKey,
        comments: issue.comments.map((comment: any) => ({
          id: comment.id,
          body: comment.body.content[0]?.content[0]?.text,
          author: comment.author.displayName,
          created: comment.created,
        })),
      }));

      console.log('Jira issue comments:', formattedComments);
      return formattedComments;
    }

    return 'No comments found.';
  } catch (error) {
    console.error('Error fetching Jira comments:', error);
    throw error;
  }
};

export const JremoveCommentF = async (issueKey: string, commentId: string) => {
  try {
    const response = await axios.delete("/api/jira/comment/removeComment", {
      headers: { "Content-Type": "application/json" },
      data: { issueKey, commentId },
    });

    const data = response.data;
    if (data.success) {
      console.log("Comment removed successfully");
      return data.message;
    }

    return "Failed to remove comment";
  } catch (error) {
    console.error("Error removing comment:", error);
    throw error;
  }
};

export const JupdateCommentF = async (issueKey: string, commentId: string, newComment: string) => {
  try {
    const response = await axios.put("/api/jira/comment/updateComment", {
      issueKey,
      commentId,
      newComment,
    }, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    if (data.success) {
      console.log("Comment updated successfully");
      return data.message;
    }

    return "Failed to update comment";
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};

export const JcreateUserF = async (emailAddress: string, displayName: string, group: string, applicationKeys: string[]) => {
  try {
    const response = await axios.post("/api/jira/user/createUser", {
      emailAddress,
      displayName,
      group,
      applicationKeys,
    }, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    if (data.success) {
      console.log("User created successfully");
      return data.message;
    }

    return "Failed to create user";
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const JdeleteUserF = async (accountId: string) => {
  try {
    const response = await axios.delete("/api/jira/user/deleteUser", {
      headers: { "Content-Type": "application/json" },
      data: { accountId },
    });

    const data = response.data;
    if (data.success) {
      console.log("User deleted successfully");
      return data.message;
    }

    return "Failed to delete user";
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export const JgetUserF = async (accountId: string) => {
  try {
    const response = await axios.get(`/api/jira/user/getUser/${accountId}`);
    if (response.data.success) {
      console.log("User data:", response.data.user);
      return response.data.user;
    } else {
      console.error("Error fetching user:", response.data.error);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user from Jira:", error);
    throw error;
  }
};

export const JgetAllUsersF = async () => {
  try {
    const response = await axios.get("/api/jira/user/getAllUsers");

    if (response.data.success && response.data.users) {
      console.log("Fetched Users: ", response.data.users);
      return response.data.users;
    }

    return [];
  } catch (error) {
    console.error("Error fetching users from Jira:", error);
    return [];
  }
};

