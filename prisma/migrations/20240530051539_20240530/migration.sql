BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [username] VARCHAR(20) NOT NULL,
    [password] VARCHAR(16) NOT NULL,
    [picture] VARCHAR(255),
    [role] VARCHAR(10) NOT NULL,
    [employeeId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_username_key] UNIQUE NONCLUSTERED ([username]),
    CONSTRAINT [User_employeeId_key] UNIQUE NONCLUSTERED ([employeeId]),
    CONSTRAINT [User_username_employeeId_key] UNIQUE NONCLUSTERED ([username],[employeeId])
);

-- CreateTable
CREATE TABLE [dbo].[RevokedToken] (
    [id] INT NOT NULL IDENTITY(1,1),
    [username] NVARCHAR(1000) NOT NULL,
    [revokedToken] VARCHAR(255) NOT NULL,
    CONSTRAINT [RevokedToken_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Employee] (
    [id] INT NOT NULL IDENTITY(1,1),
    [fullName] NVARCHAR(100) NOT NULL,
    [gender] NVARCHAR(10) NOT NULL,
    [dateOfBirth] DATETIME2 NOT NULL,
    [birthPlace] NVARCHAR(100) NOT NULL,
    [permanentAddress] NVARCHAR(100) NOT NULL,
    [mariageStatus] VARCHAR(10) NOT NULL,
    [identityNumber] VARCHAR(20) NOT NULL,
    [email] NVARCHAR(10) NOT NULL,
    [phoneNumber] NVARCHAR(10) NOT NULL,
    [highestEducationLevel] VARCHAR(100) NOT NULL,
    [graduatedSchool] VARCHAR(100) NOT NULL,
    [cardId] VARCHAR(50) NOT NULL,
    [positionCode] VARCHAR(50) NOT NULL,
    [departmentCode] VARCHAR(50) NOT NULL,
    [fingerprintCode] VARCHAR(50),
    [userId] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Employee_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Employee_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Employee_identityNumber_phoneNumber_email_cardId_key] UNIQUE NONCLUSTERED ([identityNumber],[phoneNumber],[email],[cardId])
);

-- CreateTable
CREATE TABLE [dbo].[Positions] (
    [id] INT NOT NULL IDENTITY(1,1),
    [positionName] NVARCHAR(100) NOT NULL,
    [positionCode] NVARCHAR(100) NOT NULL,
    CONSTRAINT [Positions_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Positions_positionCode_key] UNIQUE NONCLUSTERED ([positionCode])
);

-- CreateTable
CREATE TABLE [dbo].[Departments] (
    [id] INT NOT NULL IDENTITY(1,1),
    [departmentCode] VARCHAR(50) NOT NULL,
    [departmentName] NVARCHAR(100) NOT NULL,
    [parentDepartmentCode] VARCHAR(50) NOT NULL,
    [factoryCode] VARCHAR(50) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Departments_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Departments_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Departments_departmentCode_key] UNIQUE NONCLUSTERED ([departmentCode])
);

-- CreateTable
CREATE TABLE [dbo].[Factor] (
    [id] INT NOT NULL IDENTITY(1,1),
    [factoryCode] VARCHAR(10) NOT NULL,
    [factoryName] NVARCHAR(100) NOT NULL,
    [address] NVARCHAR(255) NOT NULL,
    [telephone] VARCHAR(20) NOT NULL,
    [faxNumber] VARCHAR(20) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Factor_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Factor_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [RevokedToken_username_revokedToken_idx] ON [dbo].[RevokedToken]([username], [revokedToken]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Employee_fullName_email_phoneNumber_cardId_departmentCode_idx] ON [dbo].[Employee]([fullName], [email], [phoneNumber], [cardId], [departmentCode]);

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_employeeId_fkey] FOREIGN KEY ([employeeId]) REFERENCES [dbo].[Employee]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
