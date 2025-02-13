import axios from 'axios';

export const JgetManyJiraIssuesF = async () => {
    try {
        const response = await axios.get("/api/jira/getManyIssues", {
            headers: { "Content-Type": "application/json" },
        });

        const data = response.data;
        if (data.issues && data.issues.length > 0) {
            // const issues = data.issues.map((issue: {
            //     key: string;
            //     fields: {
            //         summary: string;
            //         issuetype: { name: string };
            //         description: { content: Array<{ content: Array<{ text: string }> }> };
            //     };
            // }) => ({
            //     key: issue.key,
            //     summary: issue.fields.summary,
            //     issueType: issue.fields.issuetype.name,
            //     description: extractDescriptionText(issue.fields.description),
            // }));
            // console.log("Jira issues:", issues)
            // return issues;
            const issueKeys = data.issues.map((issue: { key: string }) => issue.key);
  console.log("Jira issue keys:", issueKeys[0]);
  return issueKeys[0];
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

export const JgetJiraIssueF = async (issueKey: string) => {
  try {
    const response = await axios.get(`/api/jira/getIssue/${issueKey}`, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;

    // Handle success response
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


export const JcreateJiraIssueF = async (
    summary: string,
    description: string,
    issueType: string = 'Task'
) => {
    try {
        const response = await axios.post("/api/jira/createIssue", {
            summary,
            description,
            issueType
        }, {
            headers: { "Content-Type": "application/json" }
        });

        const data = response.data;
        console.log("Jira Issue Created:", data);
        return data;
    } catch (error) {
        console.error("Error creating Jira issue:", error);
        throw error;
    }
};

export const JdeleteJiraIssueF = async (issueKey: string) => {
    try {
        const response = await axios.delete('/api/jira/deleteIssue', {
            data: { issueKey }
        });

        console.log('Issue deleted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting issue:', error);
        throw error;
    }
};

export const JupdateJiraIssueF = async (issueKey: string, summary: string, description: string, issueType: string = 'Task') => {
    try {
      const response = await axios.put('/api/jira/updateIssue', {
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
  

