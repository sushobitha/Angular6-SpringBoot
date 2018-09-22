package com.employee.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Value("${createdBy}")
	private String createdBy;
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.employee.controller")).paths(PathSelectors.any())
				.build().apiInfo(apiInfo());
	}
	
	@SuppressWarnings("deprecation")
	public ApiInfo apiInfo() {
		ApiInfo apiInfo = new ApiInfo("Employee System",
				"Employee System", "1.0", "",
				createdBy, "", "");
		return apiInfo;
	}
}